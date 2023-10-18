import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType } from '@/navigation';
import AppMultiplayerDetails from '@/components/Common/AppMultiplayerDetails';

const MultiplayerDetails = () => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <React.Fragment>
            <AppMultiplayerDetails />
        </React.Fragment>
    );
};

export default MultiplayerDetails;
