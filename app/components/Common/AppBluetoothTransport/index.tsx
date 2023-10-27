// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, FlatList } from 'react-native';
// import BleManager from 'react-native-ble-manager';

// const BLE_NAME = 'Your_Bluetooth_Device_Name';

// type Peripheral = {
//     id: string;
//     name: string;
// };

// interface DisconnectedPeripheralData {
//     peripheral: string;
// }

// const BluetoothComponent = () => {
//     const [isScanning, setScanning] = useState<boolean>(false);
//     const [connectedDevice, setConnectedDevice] = useState<Peripheral | null>(null);
//     const [peripherals, setPeripherals] = useState<Peripheral[]>([]);

//     useEffect(() => {
//         const handleDiscoverPeripheral = (peripheral: Peripheral) => {
//             console.log('Discovered peripheral:', peripheral.name);
//             if (peripheral.name === BLE_NAME) {
//                 setPeripherals((prevPeripherals) => [...prevPeripherals, peripheral]);
//             }
//         };

//         const handleDisconnectedPeripheral = (data: DisconnectedPeripheralData) => {
//             console.log('Disconnected from', data.peripheral);
//             setConnectedDevice(null);
//         };

//         BleManager.start({ showAlert: false }) // Make sure the method is correct
//             .then(() => {
//                 BleManager.enableBluetooth()
//                     .then(() => {
//                         // Add listeners here
//                         BleManager.startPeripheralScan([], null, (error, peripheral) => {
//                             if (peripheral) {
//                                 handleDiscoverPeripheral(peripheral);
//                             }
//                         });

//                         // Add a listener for disconnections
//                         BleManager.connectStatusListener();
//                         BleManager.disconnectNotificationListener();
//                         BleManager.addPeripheralNotificationListener(handleDisconnectedPeripheral);

//                         startPeripheralScan();
//                     })
//                     .catch((error) => {
//                         console.error('Bluetooth activation error', error);
//                     });
//             })
//             .catch((error) => {
//                 console.error('Error starting BleManager', error);
//             });

//         return () => {
//             // Remove event listeners or perform cleanup as needed
//         };
//     }, []);

//     const startPeripheralScan = () => {
//         if (isScanning) {
//             return;
//         }

//         setPeripherals([]); // Clear previous peripherals
//         setScanning(true);

//         BleManager.scan([], 10, false)
//             .then(() => {
//                 console.log('Scanning...');
//             })
//             .catch((err) => {
//                 console.error(err);
//             });
//     };

//     const startScanning = () => {
//         if (isScanning) {
//             return;
//         }

//         setScanning(true);
//         setPeripherals([]);
//         startPeripheralScan();
//     };

//     const connectToDevice = (peripheral: Peripheral) => {
//         BleManager.connect(peripheral.id)
//             .then(() => {
//                 setConnectedDevice(peripheral);
//                 console.log('Connected to', peripheral.name);
//             })
//             .catch((error) => {
//                 console.error('Connection error', error);
//             });
//     };

//     return (
//         <View>
//             <Text>Connected Device: {connectedDevice ? connectedDevice.name : 'None'}</Text>
//             <Button title="Start Scanning" onPress={startScanning} />
//             <FlatList
//                 data={peripherals}
//                 keyExtractor={(item) => item.id}
//                 renderItem={({ item }) => (
//                     <View>
//                         <Text>{item.name}</Text>
//                         <Button title="Connect" onPress={() => connectToDevice(item)} />
//                     </View>
//                 )}
//             />
//         </View>
//     );
// };

// export default BluetoothComponent;
