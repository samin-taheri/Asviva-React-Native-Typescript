import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppCustomHeader from '../AppCustomHeader';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType } from '@/navigation';
import AppDetailsSection from '../AppDetailsSection';
import { COLORS } from '@/theme';

const AppHelpAndFeedback: React.FC = ({ }) => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <View style={styles.container}>
            <AppCustomHeader title="help_and_feedback" onBack={() => navigation.goBack()} navigation={navigation} onLogo={false} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    <AppDetailsSection
                        title="faq"
                        iconName="account-tie"
                        imageSource={require('../../../assets/images/help-1.png')}
                        onPress={() => { }}
                    />
                    <AppDetailsSection
                        title="help_and_feedback"
                        iconName="account-tie"
                        imageSource={require('../../../assets/images/help-2.png')}
                        onPress={() => { }}
                    />
                    <AppDetailsSection
                        title="contact_customer_service"
                        iconName="account-tie"
                        imageSource={require('../../../assets/images/help-3.png')}
                        onPress={() => {
                        }}
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
export default AppHelpAndFeedback;