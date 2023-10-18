import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType } from '@/navigation';
import AppMyWorkouts from '@/components/Common/AppMyWorkouts';

const MyWorkouts = () => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <React.Fragment>
            <AppMyWorkouts />
        </React.Fragment>
    );
};

export default MyWorkouts;
