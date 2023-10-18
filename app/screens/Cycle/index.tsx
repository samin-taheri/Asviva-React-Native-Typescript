import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType } from '@/navigation';
import AppCycle from '@/components/Common/AppCycle';

const Cycle = () => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <React.Fragment>
            <AppCycle />
        </React.Fragment>
    );
};

export default Cycle;
