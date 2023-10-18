import React, { useCallback, useLayoutEffect, useState } from 'react';

import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';

import { AppScreen, Block, Text } from '@/components';
import { useAppDispatch, useAppSelector, useDialog, useStyledTag } from '@/hooks';
import { HomeStackNavigationPropsType, HomeStackNavigationRouteType, Routes } from '@/navigation';
import { settingsRedux } from '@/store';
import { Permission, PERMISSION_TYPE } from '@/utils';
import AppBackgroundCard from '@/components/Common/AppBackgroundCard';
import AppCustomHeader from '@/components/Common/AppCustomHeader';
import AppTotalWorkout from '@/components/Common/AppTotalWorkout';
import AppWeaklyGoals from '@/components/Common/AppWeaklyGoals';
import AppWorkoutDetails from '@/components/Common/AppWorkoutDetails';
import { COLORS } from '@/theme';
import AppChart from '@/components/Common/AppCharts';

const HeaderRight = ({ language }: { language: string }) => (
  <Block row s="pr-20">
    <Text white>language</Text>
    <Text white>:</Text>
    <Text white s="pl-5">
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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight language={language} />,
    });
  }, [navigation, language]);

  return (
    <React.Fragment>
      <AppCustomHeader navigation={navigation} onLogo={true} />
      <AppScreen scroll customStyle={{ backgroundColor: COLORS.backgroundColor }}>
        <AppBackgroundCard title="Find your coach" backgroundImage={require('../../assets/images/bg-3.jpg')} onPress={() => {
          navigation.navigate(Routes.FORM_SCREEN, {
            detailId: '1230',
          });
        }}
        />
        <AppTotalWorkout />
        <AppWeaklyGoals onPress={() => { navigation.navigate(Routes.QUESTIONNAIRE_SCREEN) }} />
        <AppWorkoutDetails onPress={() => navigation.navigate(Routes.WORKOUTDETAILS_SCREEN)} title="Record of Workouts" />
        <AppChart />
        {/* <SegmentedControl currentIndex={activeTab} onChange={(index: number) => setActiveTab(index)} segments={[{ label: '1st' }, { label: '2nd' }, { label: '3nd' }]} mt-10 mb-10 /> */}

        {/* <LanguageArea>
          <AppButton type="primary" title={'Türkçe'} onPress={() => onChangeLang('tr')} mb-5 />
          <AppButton type="primary" title={'İngilizce'} onPress={() => onChangeLang('en')} />
        </LanguageArea> */}

      </AppScreen>
    </React.Fragment>
  );
};

export default HomePage;
