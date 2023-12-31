import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType, Routes } from '@/navigation';
import AppConnectDevices from '@/components/Common/AppConnectDevices';

const ConnectDevices = () => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <React.Fragment>
            <AppConnectDevices brandsNavigate={() => { navigation.navigate(Routes.BRANDS_SCREEN) }} />
        </React.Fragment>
    );
};

export default ConnectDevices;
