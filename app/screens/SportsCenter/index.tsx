import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType } from '@/navigation';
import AppSportsCenter from '@/components/Common/AppSportsCenter';

const SportsCenter = () => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <React.Fragment>
            <AppSportsCenter />
        </React.Fragment>
    );
};

export default SportsCenter;
