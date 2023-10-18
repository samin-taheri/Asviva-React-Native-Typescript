import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType, Routes } from '@/navigation';
import AppWorkoutDetailsComponent from '@/components/Common/AppWorkoutDetailsComponent';

const WorkoutDetails = () => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <React.Fragment>
            <AppWorkoutDetailsComponent />
        </React.Fragment>
    );
};

export default WorkoutDetails;
