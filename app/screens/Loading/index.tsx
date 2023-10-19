import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType } from '@/navigation';
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
