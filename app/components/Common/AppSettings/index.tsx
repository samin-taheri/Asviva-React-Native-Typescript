import { HomeStackNavigationPropsType, Routes } from '@/navigation';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AppCustomHeader from '../AppCustomHeader';
import AppDetailsSection from '../AppDetailsSection';
import { COLORS } from '@/theme';
import AppButton from '../AppButton';
import { useDialog } from '@/hooks';

const AppSettings: React.FC = ({ }) => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();
    const dialog = useDialog();

    const navigateToLogin = () => {
        navigation.navigate(Routes.LOGIN_SCREEN)
    }
    return (

        <View style={styles.container}>
            <AppCustomHeader title="Settings" onBack={() => navigation.goBack()} navigation={navigation} onLogo={false} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    <AppDetailsSection
                        title="unit_type"
                        iconName="account-tie"
                        imageSource={require('../../../assets/images/settings-1.png')}
                        onPress={() => { }}
                    />
                    <AppDetailsSection
                        title="permission_settings"
                        iconName="account-tie"
                        imageSource={require('../../../assets/images/settings-2.png')}
                        onPress={() => { }}
                    />
                    <AppDetailsSection
                        title="storage_management"
                        iconName="account-tie"
                        imageSource={require('../../../assets/images/settings-3.png')}
                        onPress={() => {
                        }}
                    />
                    <AppDetailsSection
                        title="about"
                        iconName="account-tie"
                        imageSource={require('../../../assets/images/settings-4.png')}
                        onPress={() => {
                        }}
                    />
                    <View style={{ width: '98%', alignSelf: 'center' }}>
                        <AppButton mt-10 type="primary" onPress={() => navigateToLogin()} title="sign_out" />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
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
    loginButton: {
        width: '96%',
        height: 45,
        backgroundColor: COLORS.primary,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: 'row',
        marginTop: 10,
        alignSelf: 'center'
    },
    buttonText2: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
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
export default AppSettings;