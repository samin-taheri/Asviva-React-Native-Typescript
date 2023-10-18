import React from 'react';
import AppQuestionnare from '@/components/Common/AppQuestionnare';
import { useNavigation, useRoute } from '@react-navigation/native';
import { HomeStackNavigationPropsType, HomeStackNavigationRouteType, Routes } from '@/navigation';

const Brands = () => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <React.Fragment>
            <AppQuestionnare onPress={() => { navigation.navigate(Routes.GOALS_SCREEN) }} />
        </React.Fragment>
    );
};

export default Brands;
