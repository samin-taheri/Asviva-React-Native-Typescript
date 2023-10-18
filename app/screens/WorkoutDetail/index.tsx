import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType } from '@/navigation';
import AppWorkoutDetailComponent from '@/components/Common/AppWorkoutDetailComponent';

const WorkoutDetail = () => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <React.Fragment>
            <AppWorkoutDetailComponent />
        </React.Fragment>
    );
};

export default WorkoutDetail;
