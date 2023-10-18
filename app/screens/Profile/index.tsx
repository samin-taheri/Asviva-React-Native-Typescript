import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType } from '@/navigation';
import AppProfile from '@/components/Common/AppProfile';

const Profile = () => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <React.Fragment>
            <AppProfile />
        </React.Fragment>
    );
};

export default Profile;
