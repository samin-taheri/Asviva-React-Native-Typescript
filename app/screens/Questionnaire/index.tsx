import React from 'react';
import AppQuestionnare from '@/components/Common/AppQuestionnare';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType, Routes } from '@/navigation';

const Questionnaire = () => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <React.Fragment>
            <AppQuestionnare onPress={() => { navigation.navigate(Routes.GOALS_SCREEN) }} />
        </React.Fragment>
    );
};

export default Questionnaire;
