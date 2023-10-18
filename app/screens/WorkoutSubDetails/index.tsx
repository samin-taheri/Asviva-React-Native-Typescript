import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType } from '@/navigation';
import AppWorkoutSubDetailComponent from '@/components/Common/AppWorkoutSubDetailsComponent';

const WorkoutSubDetails = () => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <React.Fragment>
            <AppWorkoutSubDetailComponent />
        </React.Fragment>
    );
};

export default WorkoutSubDetails;
