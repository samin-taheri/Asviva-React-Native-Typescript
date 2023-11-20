import { useState } from 'react';
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
import { decode } from 'punycode';
import { Buffer } from 'buffer';

//serviceData
const SERVICE_UUID = '00001800-0000-1000-8000-00805f9b34fb';
const UUID = '00002a00-0000-1000-8000-00805f9b34fb';
const HEART_RATE_UUID = '0000fee0-0000-1000-8000-00805f9b34fb';
const HEART_RATE_UUID2 = '00002a2b-0000-1000-8000-00805f9b34fb';
const DISTANCE_UUID = '00000006-0000-3512-2118-0009af100700';
const CALORIES_UUID = '00000004-0000-3512-2118-0009af100700';
const HEART_RATE_CHARACTERISTIC = '0000fee0-0000-1000-8000-00805f9b34fb';

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
}

function useBLE(): BluetoothLowEnergyApi {
    const [allDevices, setAllDevices] = useState<Device[]>([]);
    const [connectedDevice, setConnectedDevice] = useState<Device | null>(null);
    const [heartRate, setHeartRate] = useState<number>(-1);
    const [distanceCharacteristic, setDistanceCharacteristic] = useState<Characteristic | null>(null);

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
        bleManager.startDeviceScan(null, null, (error, device) => {
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
                    // const distanceCharacteristic = await deviceConnection.characteristicsForService(
                    //     service.uuid,
                    // );
                    // const distanceValueCharacteristic = distanceCharacteristic.find(
                    //     characteristic => characteristic.uuid === DISTANCE_UUID
                    // );

                    // // Read the value of the distance characteristic
                    // if (distanceValueCharacteristic) {
                    //     const distanceValue = await deviceConnection.readCharacteristicForService(
                    //         service.uuid,
                    //         distanceValueCharacteristic.uuid
                    //     );
                    //     console.log('Distance Value:', distanceValue.value);
                    //     // Now you can handle the distance value as needed
                    // }

                    // const caloriesCharacteristic = await deviceConnection.characteristicsForService(
                    //     service.uuid,
                    // );
                    // const caloriesValueCharacteristic = caloriesCharacteristic.find(
                    //     characteristic => characteristic.uuid === CALORIES_UUID
                    // );

                    // // Read the value of the calories characteristic
                    // if (caloriesValueCharacteristic) {
                    //     const caloriesValue = await deviceConnection.readCharacteristicForService(
                    //         service.uuid,
                    //         caloriesValueCharacteristic.uuid
                    //     );
                    //     console.log('Calories Value:', caloriesValue.value);
                    //     // Now you can handle the calories value as needed
                    // }

                    const heartRateCharacteristic = await deviceConnection.characteristicsForService(
                        service.uuid,  // Use the UUID of the service
                    );
                    // Find the heart rate characteristic based on its UUID
                    const heartRateValueCharacteristic = heartRateCharacteristic.find(
                        characteristic => characteristic.uuid === HEART_RATE_UUID2
                    );
                    if (heartRateValueCharacteristic) {
                        // Read the value of the heart rate characteristic
                        const heartRateValue = await deviceConnection.readCharacteristicForService(
                            service.uuid,
                            heartRateValueCharacteristic.uuid
                        );
                        // console.log('Heart rate characteristic found:', heartRateValueCharacteristic);
                        console.log('Heart Rate Value:', heartRateValue.value);

                        if (heartRateValue.value !== null) {
                            // raw: e7070b14110d2e0100000c
                            const rawData = heartRateValue.value;
                            let innerHeartRate: number = -1;

                            const firstBitValue: number = parseInt(rawData, 16) & 0x01;

                            if (firstBitValue === 0) {
                                innerHeartRate = parseInt(rawData.substring(2, 4), 16); // Assuming the heart rate is at a specific position in the data
                            } else {
                                innerHeartRate =
                                    parseInt(rawData.substring(2, 4), 16) << 8 +
                                    parseInt(rawData.substring(4, 6), 16);
                            }

                            setHeartRate(innerHeartRate);
                            console.log('The Decoded Heart Rate Value Is:', innerHeartRate);
                        } else {
                            console.log('Heart rate value is null');
                        }
                        // Now you can set the heart rate value in your state or display it as needed
                    }
                }
                // for (const service of services) {
                //     const heartRateCharacteristic = await deviceConnection.characteristicsForService(
                //         HEART_RATE_UUID,
                //     );
                //     console.log(`heart rate characteristics for service ${service.id}:`, heartRateCharacteristic)
                //     // const characteristics = await service.characteristics();
                //     // console.log(`Characteristics for service ${service.id}:`, characteristics);
                // }



                // const heartRateCharacteristic = await deviceConnection.characteristicsForService(
                //     HEART_RATE_UUID2,
                // );
                // for (const characteristic of heartRateCharacteristic) {
                //     console.log(`Characteristic UUID: ${characteristic.uuid}`);
                // }



                // Read a specific characteristic (example: HEART_RATE_CHARACTERISTIC)
                // console.log('Read Characteristic:', heartRateCharacteristic);
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
                HEART_RATE_UUID2,
                HEART_RATE_CHARACTERISTIC,
                (error, characteristic) => onHeartRateUpdate(error, characteristic),
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
    };
}

export default useBLE;