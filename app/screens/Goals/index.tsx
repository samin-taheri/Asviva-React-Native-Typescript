import React from 'react';
import AppGoals from '@/components/Common/AppGoals';
import { useRoute } from '@react-navigation/native';
import { HomeStackNavigationRouteType } from '@/navigation';

const Goals = () => {
    const route = useRoute<HomeStackNavigationRouteType<'GOALS_SCREEN'>>();

    return (
        <React.Fragment>
            <AppGoals />
        </React.Fragment>
    );
};

export default Goals;
