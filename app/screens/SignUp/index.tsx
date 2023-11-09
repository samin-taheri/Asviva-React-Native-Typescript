import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType, Routes } from '@/navigation';
import AppSignUp from '@/components/Common/AppSignup';

const SignUp = () => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <React.Fragment>
            <AppSignUp />
        </React.Fragment>
    );
};

export default SignUp;
