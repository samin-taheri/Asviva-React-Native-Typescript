import React, { memo } from 'react';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Block } from '@/components';
import { RootStackNavigationProps, Routes } from '@/navigation';

import AppSplash from '@/components/Common/AppSplash';

const SplashScreen = () => {
  const navigation: StackNavigationProp<RootStackNavigationProps> = useNavigation();

  return (
    <Block flex bg-white center middle>
      <AppSplash onPress={() => navigation.navigate(Routes.MAIN_TABS_ROOT)}
      />
    </Block>
  );
};

export default memo(SplashScreen);
