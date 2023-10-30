// import React, { Component } from 'react';
// import { Button, View, Text } from 'react-native';
// import { BleManager, LogLevel } from 'react-native-ble-plx';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// interface Props { }

// interface State {
//     manager: BleManager;
// }

// export default class TestComponent extends Component<Props, State> {
//     constructor(props: Props) {
//         super(props);
//         this.state = {
//             manager: new BleManager(),
//         };
//     }

//     scanAndConnect() {
//         const { manager } = this.state;
//         manager.startDeviceScan(null, null, (error, device) => {
//             console.log(error);
//             console.log(device);
//         });
//     }

//     componentDidMount() {
//         const { manager } = this.state;
//         const subscription = manager.onStateChange((state) => {
//             if (state === 'PoweredOn') {
//                 this.scanAndConnect();
//                 subscription.remove();
//             }
//         }, true);
//     }

//     render() {
//         return (
//             <View style={{ flex: 1 }}>
//                 <TouchableOpacity onPress={() => this.scanAndConnect()}>
//                     <Text style={{ color: 'black', fontSize: 20 }}>Scan</Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }
import React, { useEffect, useState, useRef } from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    PermissionsAndroid,
} from "react-native";
import { BleManager } from "react-native-ble-plx";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { atob } from "react-native-quick-base64";

const bleManager = new BleManager();

// Android Bluetooth Permission
async function requestLocationPermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
            {
                title: "Location permission for bluetooth scanning",
                message:
                    "Grant location permission to allow the app to scan for Bluetooth devices",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK",
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Location permission for bluetooth scanning granted");
        } else {
            console.log("Location permission for bluetooth scanning denied");
        }
    } catch (err) {
        console.warn(err);
    }
}

requestLocationPermission();

const SERVICE_UUID = "4fafc201-1fb5-459e-8fcc-c5c9c331914b";
const STEP_DATA_CHAR_UUID = "beefcafe-36e1-4688-b7f5-00000000000b";

export default function BLEManager() {
    const [deviceID, setDeviceID] = useState<string | null>(null);
    const [stepCount, setStepCount] = useState<number>(0);
    const [stepDataChar, setStepDataChar] = useState<any>(null); // Not Used
    const [connectionStatus, setConnectionStatus] = useState("Searching...");

    const progress = (stepCount / 1000) * 100;

    const deviceRef = useRef(null);

    const searchAndConnectToDevice = () => {
        bleManager.startDeviceScan(null, null, (error, device) => {
            if (error) {
                console.error(error);
                setConnectionStatus("Error searching for devices");
                return;
            }
            if (device) {
                bleManager.stopDeviceScan();
                setConnectionStatus("Connecting...");
                connectToDevice(device);
            }
        });
    };

    useEffect(() => {
        searchAndConnectToDevice();
    }, []);

    const connectToDevice = (device: any) => {
        return device
            .connect()
            .then((connectedDevice: any) => {
                setDeviceID(connectedDevice.id);
                setConnectionStatus("Connected");
                deviceRef.current = connectedDevice;
                return connectedDevice.discoverAllServicesAndCharacteristics();
            })
            .then((deviceWithServices: any) => {
                return deviceWithServices.services();
            })
            .then((services: any) => {
                let service = services.find((s: any) => s.uuid === SERVICE_UUID);
                return service.characteristics();
            })
            .then((characteristics: any) => {
                let stepDataCharacteristic = characteristics.find(
                    (char: any) => char.uuid === STEP_DATA_CHAR_UUID
                );
                setStepDataChar(stepDataCharacteristic);
                stepDataCharacteristic.monitor((error: any, char: any) => {
                    if (error) {
                        console.error(error);
                        return;
                    }
                    const rawStepData = atob(char.value);
                    console.log("Received step data:", rawStepData);
                    setStepCount(rawStepData);
                });
            })
            .catch((error: any) => {
                console.log(error);
                setConnectionStatus("Error in Connection");
            });
    };

    useEffect(() => {
        const subscription = bleManager.onDeviceDisconnected(
            deviceID,
            (error, device) => {
                if (error) {
                    console.log("Disconnected with error:", error);
                }
                setConnectionStatus("Disconnected");
                console.log("Disconnected device");
                setStepCount(0); // Reset the step count
                if (deviceRef.current) {
                    setConnectionStatus("Reconnecting...");
                    connectToDevice(deviceRef.current)
                        .then(() => setConnectionStatus("Connected"))
                        .catch((error) => {
                            console.log("Reconnection failed: ", error);
                            setConnectionStatus("Reconnection failed");
                        });
                }
            }
        );
        return () => subscription.remove();
    }, [deviceID]);

    return (
        <View>
            <View style={styles.contentWrapper}>
                <View style={styles.topTitle}>
                    <View style={styles.stepTitleWrapper}>
                        <Text style={styles.title}>Step Sense</Text>
                    </View>
                </View>
                <AnimatedCircularProgress
                    size={280}
                    width={15}
                    fill={progress}
                    lineCap="round"
                    tintColor={
                        progress >= 100 ? "#FB975C" : progress >= 50 ? "#EF664C" : "#FFF386"
                    }
                    backgroundColor="#3d5875"
                >
                    {(fill) => (
                        <View style={styles.stepWrapper}>
                            <Text style={styles.steps}>{stepCount}</Text>
                            <Text style={styles.percent}>{`${Math.round(fill)}%`}</Text>
                        </View>
                    )}
                </AnimatedCircularProgress>
            </View>
            <View style={styles.bottomWrapper}>
                <Text style={styles.connectionStatus}>{connectionStatus}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    contentWrapper: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 40,
        width: "100%",
    },
    topTitle: {
        paddingVertical: 20,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    stepTitleWrapper: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(251, 151, 92, 0.5)",
        borderRadius: 15,
    },
    title: {
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 20,
        color: "white",
    },
    stepWrapper: {
        justifyContent: "center",
        alignItems: "flex-end",
    },
    steps: {
        fontSize: 48,
        color: "white",
        fontWeight: "bold",
        fontFamily: "Verdana",
    },
    percent: {
        fontSize: 18,
        color: "white",
        marginTop: 10,
    },
    bottomWrapper: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(251, 151, 92, 0.5)",
        marginBottom: 20,
        height: "15%",
        borderRadius: 20,
        width: "90%",
    },
    connectionStatus: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        fontFamily: "System",
    },
});
