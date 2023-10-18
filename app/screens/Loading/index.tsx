import React from 'react';
import AppQuestionnare from '@/components/Common/AppQuestionnare';
import { useNavigation, useRoute } from '@react-navigation/native';
import { HomeStackNavigationPropsType, HomeStackNavigationRouteType, Routes } from '@/navigation';
import AppLoading from '@/components/Common/AppLoading';

const Loading = () => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <React.Fragment>
            <AppLoading navigation={navigation} />
        </React.Fragment>
    );
};

export default Loading;
