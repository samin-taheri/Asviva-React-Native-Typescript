import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType } from '@/navigation';
import AppForgotPassword from '@/components/Common/AppForgotPassword';

const ForgotPassword = () => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <React.Fragment>
            <AppForgotPassword onForgotPassword={() => navigation.goBack()} back={() => navigation.goBack()} />
        </React.Fragment>
    );
};

export default ForgotPassword;
