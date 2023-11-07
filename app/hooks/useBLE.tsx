/* eslint-disable no-bitwise */
import { useState } from 'react';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import {
    BleError,
    BleManager,
    Characteristic,
    Device,
    ScanMode,
} from 'react-native-ble-plx';
import { PERMISSIONS, requestMultiple } from 'react-native-permissions';
import DeviceInfo from 'react-native-device-info';

import { atob } from 'react-native-quick-base64';

//serviceData
const FTMS_SERVICE_UUID = '00001826-0000-1000-8000-00805f9b34fb';
const HEART_RATE_UUID = '0000180d-0000-1000-8000-00805f9b34fb';
const HEART_RATE_CHARACTERISTIC = '00002a37-0000-1000-8000-00805f9b34fb';

const bleManager = new BleManager();

type VoidCallback = (result: boolean) => void;

interface BluetoothLowEnergyApi {
    requestPermissions(cb: VoidCallback): Promise<void>;
    scanForPeripherals(): void;
    requestBluetoothPermission(): void;
    connectToDevice: (deviceId: Device) => Promise<void>;
    disconnectFromDevice: () => void;
    connectedDevice: Device | null;
    allDevices: Device[];
    heartRate: number;
    distance: number;
}

const distanceBuffer: [number, number, number] = [-1, -1, -1];
let numOfSamples = 0;

function useBLE(): BluetoothLowEnergyApi {
    const [allDevices, setAllDevices] = useState<Device[]>([]);
    const [connectedDevice, setConnectedDevice] = useState<Device | null>(null);
    const [heartRate, setHeartRate] = useState<number>(0);
    const [distance, setDistance] = useState<number>(-1);

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

    const requestBluetoothPermission = async () => {
        if (Platform.OS === 'ios') {
            return true
        }
        if (Platform.OS === 'android' && Platform.Version >= 23) {
            const apiLevel = parseInt(Platform.Version.toString(), 10)

            if (apiLevel < 34) {
                const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
                return granted === PermissionsAndroid.RESULTS.GRANTED
            }
            if (PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN && PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT) {
                const result = await PermissionsAndroid.requestMultiple([
                    PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
                    PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                ])

                return (
                    result['android.permission.BLUETOOTH_CONNECT'] === PermissionsAndroid.RESULTS.GRANTED &&
                    result['android.permission.BLUETOOTH_SCAN'] === PermissionsAndroid.RESULTS.GRANTED &&
                    result['android.permission.ACCESS_FINE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED
                )
            }
        }
        return false
    }

    const isDuplicteDevice = (devices: Device[], nextDevice: Device) =>
        devices.findIndex(device => nextDevice.id === device.id) > -1;

    const scanForPeripherals = () =>
        bleManager.startDeviceScan(null, {
            allowDuplicates: true,
            scanMode: ScanMode.LowLatency,
        }, (error, device) => {
            const currentDistance = Math.pow(10, (-75 - device?.rssi!) / (10 * 3));
            distanceBuffer[numOfSamples % 3] = currentDistance;
            if (distanceBuffer.includes(-1)) {
                setDistance(-1);
            } else {
                const sum = distanceBuffer.reduce((a, b) => a + b);
                setDistance(Math.round(sum / distanceBuffer.length));
            }

            numOfSamples++;
            if (device) {
                setAllDevices((prevState: Device[]) => {
                    if (!isDuplicteDevice(prevState, device)) {
                        return [...prevState, device];
                    }
                    return prevState;
                });
            }
            if (error) {
                console.log(error);
                console.log('Bluetooth error');
                return;
            }
        });

    const connectToDevice = async (device: Device) => {
        try {
            const deviceConnection = await bleManager.connectToDevice(device.id);
            setConnectedDevice(deviceConnection);
            await deviceConnection.discoverAllServicesAndCharacteristics();
            bleManager.stopDeviceScan();
            startStreamingData(deviceConnection);
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

        const rawData = atob(characteristic.value);
        let innerHeartRate: number = -1;

        const firstBitValue: number = Number(rawData) & 0x01;

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
                HEART_RATE_UUID,
                HEART_RATE_CHARACTERISTIC,
                (error, characteristic) => onHeartRateUpdate(error, characteristic),
            );
        } else {
            console.log('No Device Connected');
        }
    };

    return {
        scanForPeripherals,
        requestPermissions,
        connectToDevice,
        requestBluetoothPermission,
        allDevices,
        connectedDevice,
        disconnectFromDevice,
        heartRate,
        distance,
    };
}

export default useBLE;