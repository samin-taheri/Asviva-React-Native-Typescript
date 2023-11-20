import React, { useEffect, useState } from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { AppScreen, AppSwitch } from '@/components';
import { HomeStackNavigationPropsType, Routes } from '@/navigation';
import AppBackgroundCard from '@/components/Common/AppBackgroundCard';
import AppCustomHeader from '@/components/Common/AppCustomHeader';
import AppTotalWorkout from '@/components/Common/AppTotalWorkout';
import AppWeaklyGoals from '@/components/Common/AppWeaklyGoals';
import AppWorkoutDetails from '@/components/Common/AppWorkoutDetails';
import AppChart from '@/components/Common/AppCharts';
import { Dimensions, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useBLE from '@/hooks/useBLE';
import { BleManager, State } from 'react-native-ble-plx';
import DeviceModal from '@/components/Common/AppDeviceModal';
import PulseIndicator from '@/components/Common/AppPulseIndicator';
import { useAppDispatch, useAppSelector } from '@/hooks';

const HomePage = () => {
  const navigation = useNavigation<HomeStackNavigationPropsType>();
  const theme = useAppSelector(state => state.settings.theme);
  const dispatch = useAppDispatch();
  const theme2 = useTheme();

  const {
    requestPermissions,
    scanForPeripherals,
    allDevices,
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
      <StatusBar
        hidden={true}
      />
      <AppCustomHeader navigation={navigation} onLogo={true} />
      <AppScreen scroll customStyle={{ backgroundColor: theme2.colors.background }}>
        <Text style={{ color: 'black' }}>Your Heart Rate Is: {heartRate} bpm</Text>

        <View>
          {connectedDevice ? (
            <>
              <PulseIndicator />
              <Text style={{ color: 'black' }}>Your Heart Rate Is: {heartRate} bpm</Text>
            </>
          ) : (
            <Text style={{ color: 'black' }}>
              Please Connect to a Monitor
            </Text>
          )}
        </View>
        <TouchableOpacity
          onPress={connectedDevice ? disconnectFromDevice : openModal}>
          <Text style={{ color: 'black' }}>
            {connectedDevice ? 'Disconnect' : 'Connect'}
          </Text>
        </TouchableOpacity>
        <DeviceModal
          closeModal={hideModal}
          visible={isModalVisible}
          connectToPeripheral={connectToDevice}
          devices={allDevices}
        />
        {connectedDevice && (
          <>
            <Text style={{ color: '#000' }}>{connectedDevice.id}</Text>
            <Text style={{ color: '#000' }}>{connectedDevice?.name}</Text>
          </>
        )}
        <AppBackgroundCard title="find_your_coach" backgroundImage={require('../../assets/images/bg-3.jpg')} onPress={() => { navigation.navigate(Routes.SPORTS_CENTER_SCREEN) }}
        />
        {/* <AppSwitch value={theme === 'dark'} onChange={() => dispatch(settingsRedux.setTheme(theme === 'light' ? 'dark' : 'light'))} /> */}
        <AppTotalWorkout />
        <AppWeaklyGoals onPress={() => { navigation.navigate(Routes.QUESTIONNAIRE_SCREEN) }} />
        <AppWorkoutDetails onPress={() => navigation.navigate(Routes.WORKOUTDETAILS_SCREEN)} title="record_of_workouts" />
        <AppChart />

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

