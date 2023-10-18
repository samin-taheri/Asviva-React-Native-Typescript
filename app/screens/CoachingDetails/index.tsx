import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType } from '@/navigation';
import AppCoachingDetailsComponent from '@/components/Common/AppCouchingDetailsComponent';

const CoachingDetails = () => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <React.Fragment>
            <AppCoachingDetailsComponent />
        </React.Fragment>
    );
};

export default CoachingDetails;
