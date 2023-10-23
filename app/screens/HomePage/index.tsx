import React, { useCallback, useLayoutEffect, useState } from 'react';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Alert, AppButton, AppScreen, Block } from '@/components';
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
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import useBLE from '@/hooks/useBLE';
import { Button } from 'react-native-elements';
import { Device } from 'react-native-ble-plx';
import DeviceModal from '@/components/Common/AppDeviceModal';
import PulseIndicator from '@/components/Common/AppPulseIndicator';

const HeaderRight = ({ language }: { language: string }) => (
  <Block row s="pr-20">
    <Text>language</Text>
    <Text>:</Text>
    <Text>
      {language}
    </Text>
  </Block>
);

const HomePage = () => {

  const dispatch = useAppDispatch();
  const dialog = useDialog();
  const navigation = useNavigation<HomeStackNavigationPropsType>();

  const LanguageArea = useStyledTag(Block, 'py-5');

  const [isPermission, setIsPermission] = useState(false);
  const language = useAppSelector(state => state.settings.language);

  const onChangeLang = (_language: string) => {
    dispatch(settingsRedux.changeLanguage(_language));
  };

  const cameraPermissions = async () => {
    const cameraPermissionsStatus = await Permission.checkPermission(PERMISSION_TYPE.camera);
    setIsPermission(cameraPermissionsStatus);
  };

  const isSCameraPermissionsCheck = async () => {
    const isCheckPermission = await Permission.checkPermission(PERMISSION_TYPE.camera);
    setIsPermission(isCheckPermission);
  };

  useFocusEffect(
    useCallback(() => {
      isSCameraPermissionsCheck();
    }, []),
  );
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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight language={language} />,
    });
  }, [navigation, language]);

  return (
    <React.Fragment>
      <StatusBar
        hidden={true}
      />
      <AppCustomHeader navigation={navigation} onLogo={true} />
      <AppScreen scroll customStyle={{ backgroundColor: COLORS.backgroundColor }}>
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
              <Text>{heartRate} bpm</Text>
            </>
          ) : (
            <Text>
              Please Connect to a Heart Rate Monitor
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
        <Button title="jsk" onPress={openModal} />
        {allDevices.map((device: Device) => (
          <Text>{device.name}</Text>
        ))
        }
        {/* <SegmentedControl currentIndex={activeTab} onChange={(index: number) => setActiveTab(index)} segments={[{ label: '1st' }, { label: '2nd' }, { label: '3nd' }]} mt-10 mb-10 /> */}
      </AppScreen>
    </React.Fragment>
  );
};

export default HomePage;
