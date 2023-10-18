import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType } from '@/navigation';
import AppHelpAndFeedback from '@/components/Common/AppHelpAndFeedback';

const HelpAndFeedbackScreen = () => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <React.Fragment>
            <AppHelpAndFeedback />
        </React.Fragment>
    );
};

export default HelpAndFeedbackScreen;
