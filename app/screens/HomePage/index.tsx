import React, { useCallback, useContext, useEffect, useReducer, createContext, useRef, useState, ReactNode } from 'react';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Alert, AppButton, AppIcon, AppScreen, Block, FloatingButton } from '@/components';
import { useAppDispatch, useAppSelector, useDialog, useStyledTag } from '@/hooks';
import { HomeStackNavigationPropsType, Routes } from '@/navigation';
import { settingsRedux } from '@/store';
import { Permission, PERMISSION_TYPE } from '@/utils';
import AppBackgroundCard from '@/components/Common/AppBackgroundCard';
import AppCustomHeader from '@/components/Common/AppCustomHeader';
import AppTotalWorkout from '@/components/Common/AppTotalWorkout';
import AppWeaklyGoals from '@/components/Common/AppWeaklyGoals';
import AppWorkoutDetails from '@/components/Common/AppWorkoutDetails';
import { COLORS } from '@/theme';
import AppChart from '@/components/Common/AppCharts';
import { ActivityIndicator, Button, Dimensions, FlatList, NativeEventEmitter, NativeModules, PermissionsAndroid, Platform, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useBLE from '@/hooks/useBLE';
import { BleManager, Device, State } from 'react-native-ble-plx';
import DeviceModal from '@/components/Common/AppDeviceModal';
import PulseIndicator from '@/components/Common/AppPulseIndicator';
import BLEManager from '@/components/Common/AppBluetoothTransport';

// const BleManagerModule = NativeModules.BleManager;
// const BleManagerEmitter = new NativeEventEmitter(BleManagerModule);
const HomePage = () => {


  // const peripherals = new Map();
  // const [isScanning, setIsScanning] = useState<boolean>(false);
  // const [connectedDevices, setConnectedDevices] = useState<Peripheral[]>([]);
  // const [discoveredDevices, setDiscoveredDevices] = useState<Peripheral[]>([]);


  // type Peripheral = {
  //   id: string;
  //   name: string;
  //   rssi: number;
  //   connected: boolean;
  // };

  // const handleGetConnectedDevices = () => {
  //   BleManager.getBondedPeripherals().then(results => {
  //     for (let i = 0; i < results.length; i++) {
  //       let peripheral = results[i];
  //       const updatedPeripheral = { ...peripheral, connected: true };
  //       peripherals.set(peripheral.id, updatedPeripheral);
  //       setConnectedDevices(Array.from(peripherals.values()));
  //     }
  //   });
  // };

  // useEffect(() => {
  //   BleManager.enableBluetooth()
  //     .then(() => {
  //       console.log('Bluetooth is turned on!');
  //       return BleManager.start({ showAlert: false });
  //     })
  //     .then(() => {
  //       console.log('BleManager initialized');
  //       handleGetConnectedDevices();
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  //   BleManager.start({ showAlert: false }).then(() => {
  //     console.log('BleManager initialized');
  //     handleGetConnectedDevices();
  //   });
  //   const stopDiscoverListener = BleManagerEmitter.addListener(
  //     'BleManagerDiscoverPeripheral',
  //     peripheral => {
  //       peripherals.set(peripheral.id, peripheral);
  //       setDiscoveredDevices(Array.from(peripherals.values()));
  //     },
  //   );
  //   const stopConnectListener = BleManagerEmitter.addListener(
  //     'BleManagerConnectPeripheral',
  //     peripheral => {
  //       console.log('BleManagerConnectPeripheral:', peripheral);
  //     },
  //   );
  //   const stopScanListener = BleManagerEmitter.addListener(
  //     'BleManagerStopScan',
  //     () => {
  //       setIsScanning(false);
  //       console.log('scan stopped');
  //     },
  //   );
  //   if (Platform.OS === 'android' && Platform.Version >= 23) {
  //     PermissionsAndroid.check(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //     ).then(result => {
  //       if (result) {
  //         console.log('Permission is OK');
  //       } else {
  //         PermissionsAndroid.request(
  //           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //         ).then(result => {
  //           if (result) {
  //             console.log('User accepted');
  //           } else {
  //             console.log('User refused');
  //           }
  //         });
  //       }
  //     });
  //   }
  //   return () => {
  //     stopDiscoverListener.remove();
  //     stopConnectListener.remove();
  //     stopScanListener.remove();
  //   };
  // }, []);

  // const startScan = () => {
  //   if (!isScanning) {
  //     BleManager.scan([], 5, true)
  //       .then(() => {
  //         console.log('Scanning...');
  //         setIsScanning(true);
  //       })
  //       .catch(error => {
  //         console.error('Error while scanning:', error);
  //       });
  //   }
  // };
  // const connectToPeripheral = (peripheral: Peripheral) => {
  //   BleManager.createBond(peripheral.id)
  //     .then(() => {
  //       // Instead of modifying the peripheral object, manage the connection status in state.
  //       const updatedDevices = connectedDevices.map((device) =>
  //         device.id === peripheral.id ? { ...device, connected: true } : device
  //       );
  //       setConnectedDevices(updatedDevices);
  //       peripherals.set(peripheral.id, peripheral);
  //       setDiscoveredDevices(Array.from(peripherals.values()));
  //       console.log('BLE device paired successfully');
  //     })
  //     .catch(() => {
  //       console.log('failed to bond');
  //     });
  // };
  // const disconnectFromPeripheral = (peripheral: Peripheral) => {
  //   BleManager.removeBond(peripheral.id)
  //     .then(() => {
  //       // Update the connection status in your state
  //       const updatedDevices = connectedDevices.map((device) =>
  //         device.id === peripheral.id ? { ...device, connected: false } : device
  //       );
  //       setConnectedDevices(updatedDevices);

  //       peripherals.set(peripheral.id, peripheral);
  //       setDiscoveredDevices(Array.from(peripherals.values()));
  //       // alert(`Disconnected from ${peripheral.name}`);
  //       console.log("Disconnected from: ");
  //     })
  //     .catch(() => {
  //       console.log('fail to remove the bond');
  //     });
  // };



  const dispatch = useAppDispatch();
  const dialog = useDialog();
  const navigation = useNavigation<HomeStackNavigationPropsType>();
  const [floatMenu, setFloatMenu] = useState<boolean>(false);

  const [isPermission, setIsPermission] = useState(false);
  const language = useAppSelector(state => state.settings.language);

  const onChangeLang = (_language: string) => {
    dispatch(settingsRedux.changeLanguage(_language));
  };

  const {
    requestPermissions,
    scanForPeripherals,
    allDevices,
    requestBluetoothPermission,
    connectToDevice,
    connectedDevice,
    heartRate,
    disconnectFromDevice,
  } = useBLE();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const scanForDevices = () => {
    requestPermissions(isGranted => {
      if (isGranted) {
        scanForPeripherals();
      }
    });
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const openModal = async () => {
    scanForDevices();
    setIsModalVisible(true);
  };
  const manager = new BleManager()

  useEffect(() => {
    const subscription = manager.onStateChange((state: State) => {
      if (state === 'PoweredOn') {
        scanForPeripherals();
        subscription.remove();
      }
    }, true);

    return () => {
      subscription.remove();
    };
  }, [manager]);

  return (
    <React.Fragment>
      {/* <Bluetooth /> */}
      <StatusBar
        hidden={true}
      />
      <AppCustomHeader navigation={navigation} onLogo={true} />
      <AppScreen scroll customStyle={{ backgroundColor: COLORS.backgroundColor }}>
        {/* <TouchableOpacity
          activeOpacity={0.5}
          style={styles.scanButton}
          onPress={startScan}>
          <Text style={styles.scanButtonText}>
            {isScanning ? 'Scanning...' : 'Scan Bluetooth Devices'}
          </Text>
        </TouchableOpacity>
        {discoveredDevices.length > 0 ? (
          <FlatList
            data={discoveredDevices}
            renderItem={({ item }) => (
              <DeviceList
                peripheral={item}
                connect={connectToPeripheral}
                disconnect={disconnectFromPeripheral}
              />
            )}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text style={styles.noDevicesText}>No Bluetooth devices found</Text>
        )} */}
        {/* {connectedDevices.length > 0 ? (
          <FlatList
            data={connectedDevices}
            renderItem={({ item }) => (
              <DeviceList
                peripheral={item}
                connect={connectToPeripheral}
                disconnect={disconnectFromPeripheral}
              />
            )}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text style={styles.noDevicesText}>No connected devices</Text>
        )} */}
        {/* <BLEManager /> */}
        <Button title="Request Bluetooth Permission" onPress={scanForPeripherals} />
        {/* <BluetoothScreen /> */}
        <AppBackgroundCard title="find_your_coach" backgroundImage={require('../../assets/images/bg-3.jpg')} onPress={() => { navigation.navigate(Routes.SPORTS_CENTER_SCREEN) }}
        />
        <AppTotalWorkout />
        <AppWeaklyGoals onPress={() => { navigation.navigate(Routes.QUESTIONNAIRE_SCREEN) }} />
        <AppWorkoutDetails onPress={() => navigation.navigate(Routes.WORKOUTDETAILS_SCREEN)} title="record_of_workouts" />
        <AppChart />
        <View>
          {connectedDevice ? (
            <>
              <PulseIndicator />
              <Text>Your Heart Rate Is:</Text>
              <Text> bpm</Text>
            </>
          ) : (
            <Text>
              Please Connect to a Monitor
            </Text>
          )}
        </View>
        <TouchableOpacity
          onPress={connectedDevice ? disconnectFromDevice : openModal}>
          <Text>
            {connectedDevice ? 'Disconnect' : 'Connect'}
          </Text>
        </TouchableOpacity>
        <DeviceModal
          closeModal={hideModal}
          visible={isModalVisible}
          connectToPeripheral={connectToDevice}
          devices={allDevices}
        />
        {allDevices.map((device: Device) => (
          <Text>{device.name}</Text>
        ))
        }
      </AppScreen>
    </React.Fragment>
  );
};


export default HomePage;

const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight,
    paddingHorizontal: 10,
  },
  scrollContainer: {
    padding: 16,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 10,
    marginTop: 20,
  },
  scanButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  scanButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  noDevicesText: {
    textAlign: 'center',
    marginTop: 10,
    fontStyle: 'italic',
  },
  deviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  deviceItem: {
    marginBottom: 10,
  },
  deviceName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  deviceInfo: {
    fontSize: 14,
  },
  deviceButton: {
    backgroundColor: '#2196F3',
    padding: 8,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  listHeader: {
    padding: 8,
    color: 'black',
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListText: {
    padding: 8,
    textAlign: 'center',
    color: 'black',
  },
  btnContainer: {
    marginTop: 10,
    marginHorizontal: 16,
    bottom: 10,
    alignItems: 'flex-end',
  },
  divider: {
    height: 1,
    width: '100%',
    marginHorizontal: 8,
    backgroundColor: '#1A1A1A',
  },
});

