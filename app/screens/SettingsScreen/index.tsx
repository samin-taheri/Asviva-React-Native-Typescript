import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType } from '@/navigation';
import AppSettings from '@/components/Common/AppSettings';

const SettingsScreen = () => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <React.Fragment>
            <AppSettings />
        </React.Fragment>
    );
};

export default SettingsScreen;
