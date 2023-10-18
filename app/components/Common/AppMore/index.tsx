import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppCustomHeader from '../AppCustomHeader';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType, Routes } from '@/navigation';
import AppDetailsSection from '../AppDetailsSection';
import AppMyModal from '../AppMyModal';
import { COLORS } from '@/theme';

const AppMore: React.FC = ({ }) => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (

        <View style={styles.container}>
            <AppCustomHeader navigation={navigation} onLogo={true} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    <AppDetailsSection
                        title="Nickname: kdck_KHjLdm"
                        iconName="account-tie"
                        imageSource={require('../../../assets/images/profile-15.png')}
                        onPress={() => navigation.navigate(Routes.PROFILE_SCREEN)}
                    />
                    <View style={styles.line} />
                    <AppDetailsSection
                        title="My Workouts"
                        iconName="account-tie"
                        imageSource={require('../../../assets/images/9.png')}
                        onPress={() => navigation.navigate(Routes.MYWORKOUTS_SCREEN)}
                    />
                    <AppDetailsSection
                        title="Records of Workouts"
                        iconName="account-tie"
                        imageSource={require('../../../assets/images/10.png')}
                        onPress={() => navigation.navigate(Routes.WORKOUTDETAILS_SCREEN)}
                    />
                    <AppDetailsSection
                        title="Sports Weekly"
                        iconName="account-tie"
                        imageSource={require('../../../assets/images/11.png')}
                        onPress={() => navigation.navigate(Routes.QUESTIONNAIRE_SCREEN)}
                    />
                    <AppDetailsSection
                        title="Physical Fitness Test"
                        iconName="account-tie"
                        imageSource={require('../../../assets/images/12.png')}
                        onPress={toggleModal}
                    />
                    <AppMyModal isVisible={isModalVisible} onClose={toggleModal} />
                    <AppDetailsSection
                        title="Manage Devices"
                        iconName="account-tie"
                        imageSource={require('../../../assets/images/13.png')}
                        onPress={() => navigation.navigate(Routes.CONNECTDEVICES_SCREEN)}
                    />
                    <AppDetailsSection
                        title="Help and Feedback"
                        iconName="account-tie"
                        imageSource={require('../../../assets/images/14.png')}
                        onPress={() => navigation.navigate(Routes.HELPANDFEEDBACK_SCREEN)}
                    />
                    <AppDetailsSection
                        title="Settings"
                        iconName="account-tie"
                        imageSource={require('../../../assets/images/15.png')}
                        onPress={() => navigation.navigate(Routes.SETTINGS_SCREEN)}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
        marginBottom: '20%'
    },
    contentContainer: {
        flex: 1,
        padding: 8
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'left',
        padding: 12,
        paddingRight: '12%',
        color: 'black',
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    line: {
        width: '92%',
        height: 1,
        backgroundColor: '#e5e5e5',
        margin: 15,
    },
    duration: {
        fontSize: 15
    },
    difficulty: {
        fontSize: 15
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 130,
        height: 120,
        borderRadius: 8,
        marginLeft: 16,
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 10,
    },
    description: {
        fontSize: 14,
        color: 'white',
        fontWeight: '600'
    },
    button: {
        backgroundColor: COLORS.primary,
        width: 115,
        height: 30,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        backgroundColor: COLORS.cardBackground,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginRight: 0,
        marginLeft: '24%'
    },
});
export default AppMore;