import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType } from '@/navigation';
import AppMore from '@/components/Common/AppMore';

const MorePage = () => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <React.Fragment>
            <AppMore />
        </React.Fragment>
    );
};

export default MorePage;
