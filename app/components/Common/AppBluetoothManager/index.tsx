import React, { Component, useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Dimensions,
    StyleSheet,
    Text,
    Button,
    View,
    Platform,
    PermissionsAndroid,
} from 'react-native';
import { BleManager, Device } from 'react-native-ble-plx';

const { width } = Dimensions.get('window');

interface BluetoothScreenProps { }

interface BluetoothScreenState {
    canScan: boolean;
    isScanning: boolean;
    devices: Device[];
    devicesMeta: { name: string; id: string }[] | null;
}

class BluetoothScreen extends Component<BluetoothScreenProps, BluetoothScreenState> {
    manager: BleManager;

    constructor(props: BluetoothScreenProps) {
        super(props);
        this.manager = new BleManager();
        this.state = {
            canScan: false,
            isScanning: false,
            devices: [],
            devicesMeta: null,
        };
    }

    componentDidMount = () => {
        const subscription = this.manager.onStateChange(state => {
            if (state === 'PoweredOn') {
                this.setState({ canScan: true });
                subscription.remove();
            }
        }, true);
    };

    componentWillUnmount = () => {
        this.manager.stopDeviceScan();
    };

    requestBluetoothPermission = async () => {
        // Request Bluetooth permission as needed for Android
        return true;
    }

    connectToDevice = (device: Device) => {
        device
            .connect()
            .then((device) => {
                return device.discoverAllServicesAndCharacteristics();
            })
            .then((device) => {
                this.setState({ devices: [], devicesMeta: null, isScanning: false });
                this.manager.stopDeviceScan();
            })
            .catch((error) => {
                console.error('Error connecting to the device:', error);
            });
    };

    // scanAndConnect = () => {
    //     this.setState({ devices: [], devicesMeta: null, isScanning: false });
    //     if (this.state.canScan) {
    //         this.setState({ isScanning: true });
    //         this.manager.startDeviceScan(null, null, (error, scannedDevice) => {
    //             if (error) {
    //                 this.setState({ isScanning: false });
    //                 return;
    //             }
    //             const devicesMeta = this.state.devicesMeta
    //                 ? this.state.devicesMeta
    //                 : [];
    //             const devices = [...this.state.devices];
    //             devices.push(scannedDevice); 
    //             this.setState({
    //                 devicesMeta: [...devicesMeta, { name: scannedDevice.name ?? 'Unknown', id: scannedDevice.id }],
    //                 devices,
    //             });
    //             if (scannedDevice.isConnectable) {
    //                 this.connectToDevice(scannedDevice); 
    //             }
    //         });
    //     }
    // };

    render() {
        return (
            <View style={styles.outerContainer}>
                <Text style={styles.textNormal}>BluetoothScreen</Text>
                {/* <Button title="Scan Devices" onPress={this.scanAndConnect} /> */}
                <View style={styles.centerContents}>
                    {this.state.devicesMeta &&
                        this.state.devicesMeta.map((device, idx) => (
                            <View key={idx} style={styles.row}>
                                <Text style={[styles.textNormal, styles.textContent]}>
                                    name: {device.name ? device.name : 'Unknown'} id: {device.id}
                                </Text>
                                <Button
                                    title="Connect"
                                    onPress={() => this.connectToDevice(this.state.devices[idx])}
                                />
                            </View>
                        ))}
                    {this.state.isScanning && (
                        <ActivityIndicator size="small" color="black" />
                    )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    centerContents: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContent: {
        height: 'auto',
        flexWrap: 'wrap',
        marginRight: 10,
        width: width * 0.6,
    },
    row: {
        alignItems: 'center',
        marginHorizontal: 10,
        flexDirection: 'row',
    },
    textNormal: {
        color: 'black',
        textAlign: 'center',
    },
    outerContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default BluetoothScreen;
