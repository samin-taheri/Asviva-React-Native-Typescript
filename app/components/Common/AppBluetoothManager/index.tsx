import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial-next';

interface BluetoothDevice {
    id: string;
    name: string;
    // You can add other properties that describe a Bluetooth device
}
const BluetoothManager: React.FC = () => {
    const [isEnabled, setIsEnabled] = useState<boolean | null>(null);
    const [devices, setDevices] = useState<BluetoothDevice[] | null>(null);

    useEffect(() => {
        const checkBluetoothStatus = async () => {
            try {
                const [bluetoothEnabled, deviceList] = await Promise.all([
                    BluetoothSerial.isEnabled(),
                    BluetoothSerial.list(),
                ]);
                setIsEnabled(bluetoothEnabled);
                setDevices(deviceList);
            } catch (error) {
                console.log('Error:', error);
            }
        };

        const handleBluetoothEnabled = () => {
            console.log('Bluetooth enabled');
        };

        const handleBluetoothDisabled = () => {
            console.log('Bluetooth disabled');
        };

        const handleBluetoothError = (err: any) => {
            console.log('Error:', err);
        };

        const handleConnectionLost = () => {

            // Call your `connect` function here
            // this.connect(this.state.device)
            //   .then(res => {})
            //   .catch(err => {
            //     console.log('error', err);
            //   });

        };

        BluetoothSerial.on('bluetoothEnabled', handleBluetoothEnabled);
        BluetoothSerial.on('bluetoothDisabled', handleBluetoothDisabled);
        BluetoothSerial.on('error', handleBluetoothError);
        BluetoothSerial.on('connectionLost', handleConnectionLost);

        // Cleanup event listeners when the component unmounts
        return () => {
            BluetoothSerial.removeListener('bluetoothEnabled', handleBluetoothEnabled);
            BluetoothSerial.removeListener('bluetoothDisabled', handleBluetoothDisabled);
            BluetoothSerial.removeListener('error', handleBluetoothError);
            BluetoothSerial.removeListener('connectionLost', handleConnectionLost);
        };

        // Call the function to check Bluetooth status when the component mounts
        checkBluetoothStatus();
    }, []);

    return (
        <View>
            <Text>Bluetooth Manager</Text>
            {isEnabled !== null ? (
                isEnabled ? (
                    <Text>Bluetooth is enabled</Text>
                ) : (
                    <Text>Bluetooth is disabled</Text>
                )
            ) : (
                <Text>Checking Bluetooth status...</Text>
            )}

            {devices !== null ? (
                <View>
                    <Text>Available Bluetooth Devices:</Text>
                    {devices.map((device, index) => (
                        <Text key={index}>
                            {device.name} - {device.id}
                        </Text>
                    ))}
                </View>
            ) : (
                <Text>Fetching device list...</Text>
            )}
        </View>
    );
};

export default BluetoothManager;
