import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType } from '@/navigation';
import AppTotalBrands from '@/components/Common/AppTotalBrands';

const Brands = () => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <React.Fragment>
            <AppTotalBrands />
        </React.Fragment>
    );
};

export default Brands;
