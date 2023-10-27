// import React, { createContext, useContext, useEffect, useReducer } from 'react';
// import BleManager from 'react-native-ble-manager';
// import {
//     PermissionsAndroid,
//     Platform,
//     NativeModules,
//     NativeEventEmitter,
// } from 'react-native';
// import { toString } from 'lodash';

// // Define your BLE properties
// const BLE_NAME = 'SAMPLE_BLE';
// const BLE_SERVICE_ID = '5476534d-1213-1212-1212-454e544f1212';
// const BLE_READ_CHAR_ID = '00105354-0000-1000-8000-00805f9b34fb';
// const BLE_WRITE_CHAR_ID = '00105352-0000-1000-8000-00805f9b34fb';

// // Define your action types
// const BLE_ACTIONS = {
//     CONNECTED: 'connected',
//     DISCONNECTED: 'disconnected',
//     SCANNING: 'scanning',
//     ADD_PERIPHERAL: 'addPeripheral',
//     CLEAR_PERIPHERALS: 'clearPeripherals',
// };

// // Define your reducer
// const bleReducer = (state, action) => {
//     switch (action.type) {
//         case BLE_ACTIONS.CONNECTED:
//             return { ...state, isConnected: true, connectedBle: action.payload };
//         case BLE_ACTIONS.DISCONNECTED:
//             return { ...state, isConnected: false, connectedBle: undefined };
//         case BLE_ACTIONS.SCANNING:
//             return { ...state, isScanning: action.payload };
//         case BLE_ACTIONS.ADD_PERIPHERAL:
//             return {
//                 ...state,
//                 peripherals: [...state.peripherals, action.payload],
//             };
//         case BLE_ACTIONS.CLEAR_PERIPHERALS:
//             return { ...state, peripherals: [] };
//         // Handle other actions here
//         default:
//             return state;
//     }
// };

// // Create a context
// const BleContext = createContext();

// // Create a context provider component
// const BleContextProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(bleReducer, {
//         isConnected: false,
//         isScanning: false,
//         connectedBle: undefined,
//         peripherals: [],
//     });

//     useEffect(() => {
//         // Request BLE permissions and enable Bluetooth
//         const requestBlePermissions = async () => {
//             if (Platform.OS === 'android' && Platform.Version >= 23) {
//                 PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then((result) => {
//                     if (result) {
//                         console.log('Location permission granted');
//                         BleManager.start({ showAlert: false });
//                     } else {
//                         PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then((granted) => {
//                             if (granted === 'granted') {
//                                 console.log('Location permission granted');
//                                 BleManager.start({ showAlert: false });
//                             } else {
//                                 console.log('Location permission denied');
//                             }
//                         });
//                     }
//                 });
//             } else {
//                 BleManager.start({ showAlert: false });
//             }
//         };

//         const initBle = async () => {
//             await requestBlePermissions();
//             BleManager.enableBluetooth();
//         };

//         BleManager.scan([], 5, true).then((results) => {
//             console.log('Scanning...', results);
//         });


//         initBle();

//         const bleEmitter = new NativeEventEmitter(NativeModules.BleManager);

//         const handleDiscoverPeripheral = (peripheral) => {
//             console.log('Got ble peripheral', peripheral.name);

//             if (peripheral.name && peripheral.name === BLE_NAME) {
//                 dispatch({
//                     type: BLE_ACTIONS.ADD_PERIPHERAL,
//                     payload: { id: peripheral.id, peripheral },
//                 });
//             }
//         };

//         const handleStopScan = () => {
//             console.log('Scan is stopped');
//             dispatch({ type: BLE_ACTIONS.SCANNING, payload: false });
//         };

//         const handleDisconnectedPeripheral = (data) => {
//             console.log('Disconnected from ' + data.peripheral);
//             dispatch({ type: BLE_ACTIONS.DISCONNECTED });
//         };

//         const handleUpdateValueForCharacteristic = (data) => {
//             console.log(
//                 'Received data from: ' + data.peripheral,
//                 'Characteristic: ' + data.characteristic,
//                 'Data: ' + toString(data.value)
//             );
//         };

//         // Add ble listeners on mount
//         const BleManagerDiscoverPeripheral = bleEmitter.addListener(
//             'BleManagerDiscoverPeripheral',
//             handleDiscoverPeripheral
//         );
//         const BleManagerStopScan = bleEmitter.addListener(
//             'BleManagerStopScan',
//             handleStopScan
//         );
//         const BleManagerDisconnectPeripheral = bleEmitter.addListener(
//             'BleManagerDisconnectPeripheral',
//             handleDisconnectedPeripheral
//         );
//         const BleManagerDidUpdateValueForCharacteristic = bleEmitter.addListener(
//             'BleManagerDidUpdateValueForCharacteristic',
//             handleUpdateValueForCharacteristic
//         );

//         return () => {
//             BleManagerDiscoverPeripheral.remove();
//             BleManagerStopScan.remove();
//             BleManagerDisconnectPeripheral.remove();
//             BleManagerDidUpdateValueForCharacteristic.remove();
//         };
//     }, []);

//     return (
//         <BleContext.Provider value={{ state, dispatch }}>
//             {children}
//         </BleContext.Provider>
//     );
// };

// export { BleContext, BleContextProvider };
