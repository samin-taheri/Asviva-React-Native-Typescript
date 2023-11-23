import { useEffect, useState } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import {
    BleError,
    BleManager,
    Characteristic,
    Device,
} from 'react-native-ble-plx';
import { PERMISSIONS, requestMultiple } from 'react-native-permissions';
import DeviceInfo from 'react-native-device-info';
import { atob } from 'react-native-quick-base64';
import { Buffer } from 'buffer';
import { base64 } from '@/utils';
import { round } from 'lodash';

//serviceData
const SERVICE_UUID = '00001826-0000-1000-8000-00805f9b34fb';
const SERVICE_UUID2 = '0000fff0-0000-1000-8000-00805f9b34fb';
const UUID = '00002a00-0000-1000-8000-00805f9b34fb';
// Service UUID 1: "00001800-0000-1000-8000-00805f9b34fb";
// Service UUID 6: "0000180a-0000-1000-8000-00805f9b34fb";
// Service UUID 9: "0000fff0-0000-1000-8000-00805f9b34fb";

// Characteristic_UUID_1: 0000fff1-0000-1000-8000-00805f9b34fb;
// Characteristic_UUID_2': 0000fff2-0000-1000-8000-00805f9b34fb;
// Characteristic_UUID_2': 00002a29-0000-1000-8000-00805f9b34fb;
// Characteristic_UUID_2': 00002a23-0000-1000-8000-00805f9b34fb;

const HEART_RATE_UUID = '00002a53-0000-1000-8000-00805f9b34fb';
const ENERGY_UUID = '00002a39-0000-1000-8000-00805f9b34fb';
const HEART_RATE_UUID2 = '00002a2b-0000-1000-8000-00805f9b34fb';
const HEART_RATE_UUID3 = '00002a00-0000-1000-8000-00805f9b34fb';
const HEART_RATE_UUID4 = '00002a01-0000-1000-8000-00805f9b34fb';
const HEART_RATE_UUID5 = '00002a04-0000-1000-8000-00805f9b34fb';
const DISTANCE_UUID = '00000006-0000-3512-2118-0009af100700';
const HEART_RATE_CHARACTERISTIC = '0000180a-0000-1000-8000-00805f9b34fb';
const sleepStartCharacteristicUUID = "00000002-0000-3512-2118-0009af100700";
const sleepEndCharacteristicUUID = "00000006-0000-3512-2118-0009af100700";
const HEART_RATE_DATA_UUID = '00000002-0000-3512-2118-0009af100700';
const CALORIES_UUID = '00002a04-0000-1000-8000-00805f9b34fb';

const bleManager = new BleManager();

type VoidCallback = (result: boolean) => void;

interface BluetoothLowEnergyApi {
    requestPermissions(cb: VoidCallback): Promise<void>;
    scanForPeripherals(): void;
    connectToDevice: (deviceId: Device) => Promise<void>;
    disconnectFromDevice: () => void;
    connectedDevice: Device | null;
    allDevices: Device[];
    heartRate: number;
    distance: number;
    calories: number;
}

function useBLE(): BluetoothLowEnergyApi {
    const [allDevices, setAllDevices] = useState<Device[]>([]);
    const [connectedDevice, setConnectedDevice] = useState<Device | null>(null);
    const [heartRate, setHeartRate] = useState<number>(-1);
    const [distance, setDistance] = useState<number>(0);
    const [calories, setCalories] = useState<number>(0);

    // useEffect(() => {
    //     const connectToDevice = async () => {
    //         try {
    //             const deviceId = 'D3:8F:7A:AC:6D:53';

    //             // Connect to the device
    //             const device = await bleManager.connectToDevice(deviceId);

    //             // Set the connected device in the state

    //             setConnectedDevice(device);
    //             // Discover services and characteristics
    //             await device.discoverAllServicesAndCharacteristics();
    //             startStreamingData(device);
    //             // Now you can work with the services and characteristics
    //             const services = await device.services();
    //             console.log('Discovered services:', services);

    //             for (const service of services) {
    //                 const characteristics = await service.characteristics();
    //                 console.log(`Characteristics for service ${service.id}:`, characteristics);
    //             }
    //         } catch (error) {
    //             console.error('Error connecting to device:', error);
    //         }
    //     };

    //     // Call the connectToDevice function when the component mounts
    //     connectToDevice();
    // }, []);


    // useEffect(() => {
    //     const readCharacteristic = async () => {
    //         try {
    //             if (connectedDevice) {
    //                 // Check if the device is connected before reading the characteristic
    //                 const isConnected = await connectedDevice.isConnected();

    //                 if (isConnected) {
    //                     const characteristic = await bleManager.readCharacteristicForDevice(
    //                         connectedDevice.id,
    //                         HEART_RATE_UUID,
    //                         HEART_RATE_CHARACTERISTIC,
    //                     );
    //                     console.log('Read Characteristic:', characteristic);

    //                     // Handle the characteristic data here if needed
    //                 } else {
    //                     console.warn('Device is not connected');
    //                 }
    //             } else {
    //                 console.warn('No connected device');
    //             }
    //         } catch (error) {
    //             console.error('Error reading characteristic:', error);
    //         }
    //     };

    //     // Call the readCharacteristic function when the component mounts
    //     readCharacteristic();
    // }, [connectedDevice]);

    const requestPermissions = async (cb: VoidCallback) => {
        if (Platform.OS === 'android') {
            const apiLevel = await DeviceInfo.getApiLevel();

            if (apiLevel < 31) {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: 'Location Permission',
                        message: 'Bluetooth Low Energy requires Location',
                        buttonNeutral: 'Ask Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    },
                );
                cb(granted === PermissionsAndroid.RESULTS.GRANTED);
            } else {
                const result = await requestMultiple([
                    PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
                    PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
                    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
                ]);

                const isGranted =
                    result['android.permission.BLUETOOTH_CONNECT'] ===
                    PermissionsAndroid.RESULTS.GRANTED &&
                    result['android.permission.BLUETOOTH_SCAN'] ===
                    PermissionsAndroid.RESULTS.GRANTED &&
                    result['android.permission.ACCESS_FINE_LOCATION'] ===
                    PermissionsAndroid.RESULTS.GRANTED;

                cb(isGranted);
            }
        } else {
            cb(true);
        }
    };

    const isDuplicteDevice = (devices: Device[], nextDevice: Device) =>
        devices.findIndex(device => nextDevice.id === device.id) > -1;

    const scanForPeripherals = () =>
        bleManager.startDeviceScan(null, { allowDuplicates: true }, (error, device) => {
            if (error) {
                console.log(error);
            }
            if (device && device.name?.includes('Mi')) {
                setAllDevices((prevState: Device[]) => {
                    if (!isDuplicteDevice(prevState, device)) {
                        return [...prevState, device];
                    }
                    return prevState;
                });
                console.log("Device Found, Stopping the Scan.");
                console.log("Connecting to:", device.name)
            }
        });
    var base64 = require('base-64');

    const connectToDevice = async (device: Device) => {
        try {
            if (device.name?.includes('Mi')) {
                const deviceConnection = await bleManager.connectToDevice(device.id);
                // setConnectedDevice(deviceConnection);
                console.log("Connected...Discovering services and characteristics");
                await deviceConnection.discoverAllServicesAndCharacteristics(device.id);
                console.log('Services and characteristics discovered');
                const services = await deviceConnection.services();
                console.log('Discovered services:', services.values);

                for (const service of services) {
                    // const characteristics = await service.characteristics();
                    // console.log(`Characteristics for service ${service.id}:`, characteristics);
                    console.log('Service UUID:', service.uuid);
                    const heartRateCharacteristic = await deviceConnection.characteristicsForService(
                        service.uuid,
                    );
                    console.log(`heart rate characteristics for service ${service.id}:`, heartRateCharacteristic)
                    const characteristics = await service.characteristics();
                    console.log(`Characteristics for service ${service.id}:`, characteristics);

                    for (const characteristic of heartRateCharacteristic) {
                        console.log(`Characteristic UUID: ${characteristic.uuid}`);
                    }
                    console.log('Read Characteristic:', heartRateCharacteristic);
                    // Find the heart rate characteristic based on its UUID
                    const heartRateValueCharacteristic = heartRateCharacteristic.find(
                        characteristic => characteristic.uuid === HEART_RATE_UUID
                    );
                    console.log('Heart Rate Value2:', heartRateValueCharacteristic?.uuid);

                    if (heartRateValueCharacteristic) {

                        try {
                            const heartRateValue = await deviceConnection.readCharacteristicForService(
                                service.uuid,
                                heartRateValueCharacteristic.uuid
                            );
                            console.log('Heart Rate Value:', heartRateValue.value);

                            if (heartRateValue.value !== null) {
                                const readValueInBase64 = heartRateValue.value;

                                const readValueInRawBytes = Buffer.from(readValueInBase64, 'base64');

                                const heightMostSignificantByte = readValueInRawBytes[1];
                                const heightLeastSignificantByte = readValueInRawBytes[0];

                                const heightInCentimeters = (heightMostSignificantByte << 8) | heightLeastSignificantByte;
                                setHeartRate(heightInCentimeters)
                            }


                        } catch (error) {
                            console.error('Error reading characteristic:', error);
                        }



                        //         const caloriesCharacteristic = await deviceConnection.characteristicsForService(
                        //             service.uuid,
                        //         );
                        //         const caloriesValueCharacteristic = caloriesCharacteristic.find(
                        //             characteristic => characteristic.uuid === HEART_RATE_UUID5
                        //         );
                        //         // Read the value of the calories characteristic
                        //         if (caloriesValueCharacteristic) {
                        //             const caloriesValue = await deviceConnection.readCharacteristicForService(
                        //                 service.uuid,
                        //                 caloriesValueCharacteristic.uuid
                        //             );
                        //             console.log('calories Value:', caloriesValue.value);

                        //             const distanceCharacteristic = await deviceConnection.characteristicsForService(
                        //                 service.uuid,
                        //             );
                        //             const distanceValueCharacteristic = distanceCharacteristic.find(
                        //                 characteristic => characteristic.uuid === HEART_RATE_UUID3
                        //             );
                        //             // Read the value of the calories characteristic
                        //             if (distanceValueCharacteristic) {
                        //                 const distanceValue = await deviceConnection.readCharacteristicForService(
                        //                     service.uuid,
                        //                     distanceValueCharacteristic.uuid
                        //                 );
                        //                 console.log('Distance Value:', distanceValue.value);

                        //                 if (distanceValue.value !== null) {
                        //                     const readValueInBase64 = distanceValue.value;

                        //                     const readValueInRawBytes = Buffer.from(readValueInBase64, 'base64');

                        //                     const heightMostSignificantByte = readValueInRawBytes[1];
                        //                     const heightLeastSignificantByte = readValueInRawBytes[0];

                        //                     const heightInCentimeters = (heightMostSignificantByte << 8) | heightLeastSignificantByte;
                        //                     setDistance(heightInCentimeters)

                        //                     //     // Extract the characteristic value from the distanceValue object
                        //                     //     const characteristicValue = distanceValue.value;

                        //                     //     // Convert the base64-encoded binary data to a buffer
                        //                     //     const buffer = Buffer.from(characteristicValue, 'base64');

                        //                     //     // Assuming the characteristic uses a simple uint16 for distance in centimeters
                        //                     //     const distanceInCentimeters = buffer.readUInt16LE(0);

                        //                     //     // Convert distance from centimeters to meters
                        //                     //     const distanceInMeters = round(distanceInCentimeters / 100);

                        //                     //     // Set the distance state (or perform any desired action with the distance)
                        //                     //     setDistance(distanceInMeters);

                        //                     //     // Log the distance in meters
                        //                     //     console.log('Distance:', distanceInMeters, 'm');
                        //                 } else {
                        //                     // Log a message if the distance value is null
                        //                     console.log('Distance value is null');
                        //                 }

                        //                 if (caloriesValue.value !== null) {
                        //                     // const readValueInBase64 = heartRateValue.value;
                        //                     // const readValueInRawBytes = Buffer.from(readValueInBase64, 'base64');
                        //                     // const heightMostSignificantByte = readValueInRawBytes[1];
                        //                     // const heightLeastSignificantByte = readValueInRawBytes[0];
                        //                     // const heightInCentimeters = (heightMostSignificantByte << 8) | heightLeastSignificantByte;
                        //                     // console.log('heart Rate Value:', heightInCentimeters);

                        //                     const characteristicValue = caloriesValue.value;

                        //                     const buffer = Buffer.from(characteristicValue, 'base64');

                        //                     // Assuming the characteristic uses a simple uint16 for MET value
                        //                     const metValue = buffer.readUInt16LE(0);

                        //                     // Duration of exercise in hours (for example, 0.5 hours or 30 minutes)
                        //                     const durationInHours = 0.1;

                        //                     // Weight of the person in kilograms
                        //                     const weightInKg = 70; // Replace with the actual weight

                        //                     // Calculate calories burned using the MET value, duration, and weight
                        //                     const caloriesBurned = metValue * durationInHours * weightInKg;

                        //                     console.log('Calories Burned:', caloriesBurned, 'cal');
                        //                     setCalories(caloriesBurned);
                        //                 } else {
                        //                     console.log('Heart rate value is null');
                        //                 }



                        //                 if (heartRateValue.value !== null) {
                        //                     // raw: e7070b14110d2e0100000c
                        //                     const rawData = base64.decode(heartRateValue.value);
                        //                     let innerHeartRate: number = -1;

                        //                     const firstBitValue: number = Number(rawData) & 0x01;

                        //                     if (firstBitValue === 0) {
                        //                         innerHeartRate = Number(rawData[1].charCodeAt(0));
                        //                     } else {
                        //                         innerHeartRate =
                        //                             Number(rawData[1].charCodeAt(0) << 8) +
                        //                             Number(rawData[2].charCodeAt(2));
                        //                     }

                        //                     setHeartRate(innerHeartRate);
                        //                     console.log('The Decoded Heart Rate Value Is:', innerHeartRate);
                        //                 } else {
                        //                     console.log('Heart rate value is null');
                        //                 }
                        //             }



                        //             // if (caloriesValue.value !== null) {
                        //             //     const readValueInBase64 = caloriesValue.value;
                        //             //     const readValueInRawBytes = Buffer.from(readValueInBase64, 'base64');
                        //             //     const heightMostSignificantByte = readValueInRawBytes[1];
                        //             //     const heightLeastSignificantByte = readValueInRawBytes[0];
                        //             //     const heightInCentimeters2 = (heightMostSignificantByte << 8) | heightLeastSignificantByte;
                        //             //     console.log('Calories:', heightInCentimeters2);
                        //             //     setCalories(heightInCentimeters2);
                        //             // } else {
                        //             //     console.log('Calories value is null');
                        //             // }
                        //             // Now you can set the heart rate value in your state or display it as needed
                        //         }
                        setConnectedDevice(deviceConnection);

                    }
                }
                startStreamingData(deviceConnection);
                bleManager.stopDeviceScan();
            }
        } catch (e) {
            console.log('FAILED TO CONNECT', e);
        }
    };

    const disconnectFromDevice = () => {
        if (connectedDevice) {
            bleManager.cancelDeviceConnection(connectedDevice.id);
            setConnectedDevice(null);
            setHeartRate(0);
        }
    };

    const onHeartRateUpdate = (
        error: BleError | null,
        characteristic: Characteristic | null,
    ) => {
        if (error) {
            console.log(error);
            return -1;
        } else if (!characteristic?.value) {
            console.log('No Data was recieved');
            return -1;
        }

        const rawData = base64.decode(characteristic.value);
        let innerHeartRate: number = -1;

        const firstBitValue: number = Number(rawData) & 0x01;
        console.log('The Decoded Heart Rate Value Is:', innerHeartRate);

        if (firstBitValue === 0) {
            innerHeartRate = rawData[1].charCodeAt(0);
        } else {
            innerHeartRate =
                Number(rawData[1].charCodeAt(0) << 8) +
                Number(rawData[2].charCodeAt(2));
        }
        setHeartRate(innerHeartRate);
    };

    const startStreamingData = async (device: Device) => {
        if (device) {
            device.monitorCharacteristicForService(
                SERVICE_UUID,
                HEART_RATE_UUID,
                onHeartRateUpdate,
            );
            console.log('Heart Rate read');
        } else {
            console.log('No Device Connected');
        }
    };

    // const readData = async(device: Device) => {
    //     const services = await device.services();
    //     console.log("Services:",services);
    //     const characteristics = await services[1].characteristics();
    //     console.log("Characteristics:",characteristics);
    //     characteristics[0].monitor(async (err, update) => {
    //       if (err) {
    //         console.log(`characteristic error: ${err}`);
    //         console.log(JSON.stringify(err));
    //       } else {
    //         const readCharacteristic = await device.readCharacteristicForService(HEART_RATE_UUID, HEART_RATE_CHARACTERISTIC); 
    //         var data = new Uint16Array(base64.decode(update.value));

    //         const heartRateData = Buffer.from(update.value, 'base64').readUInt16LE(0);
    //         console.log("Heart Beats:",heartRateData);
    //       }
    //     });
    //   }

    return {
        scanForPeripherals,
        requestPermissions,
        connectToDevice,
        allDevices,
        connectedDevice,
        disconnectFromDevice,
        heartRate,
        distance,
        calories,
    };
}

export default useBLE;