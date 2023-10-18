import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType } from '@/navigation';
import AppChallengeDetails from '@/components/Common/AppChallengeDetails';

const ChallengeDetails = () => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <React.Fragment>
            <AppChallengeDetails />
        </React.Fragment>
    );
};

export default ChallengeDetails;
