import { COLORS } from '@/theme';
import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated, ViewStyle, Easing } from 'react-native';
import Swiper from 'react-native-swiper';
import AppSplashIcons from '../AppSplashIcons';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType, Routes } from '@/navigation';
import Text from '../Text';
import Feather from 'react-native-vector-icons/Feather';

interface SplashIconsProps {
    onPress: () => void;
}

const AppSplash: React.FC<SplashIconsProps> = ({ onPress }) => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    const zoomAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(zoomAnim, {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    }, [zoomAnim]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to</Text>
            <Text style={styles.title2}>Real Estate App</Text>
            <Text style={styles.text}>Choose an account to login</Text>
            <View style={{ flexDirection: 'row', marginTop: 60 }}>
                <TouchableOpacity style={styles.box1} onPress={() => navigation.navigate(Routes.MAIN_TABS_ROOT)}>
                    <Text style={{ color: 'white', fontSize: 26, fontWeight: 'bold', textAlign: 'left', paddingLeft: 20, paddingBottom: 20 }}>User Account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box2} onPress={() => navigation.navigate(Routes.MAIN_TABS_ROOT)}>
                    <Text style={{ color: 'white', fontSize: 26, fontWeight: 'bold', textAlign: 'left', paddingLeft: 20, paddingBottom: 20 }}>Agent Account</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.backContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate(Routes.LOGIN_SCREEN)}>
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: '50%',
        flex: 1,
        backgroundColor: 'white',
    },
    outerCircle: {
        position: 'absolute',
        width: 300,
        height: 300,
        borderRadius: 200,
        backgroundColor: 'rgba(213, 213, 213, 0.2)',
    },
    innerCircle: {
        position: 'absolute',
        width: 250,
        height: 250,
        borderRadius: 200,
        backgroundColor: 'rgba(213, 213, 213, 0.3)',
    },
    innerCircle2: {
        position: 'absolute',
        width: 200,
        height: 200,
        borderRadius: 200,
        backgroundColor: 'rgba(213, 213, 213, 0.4)',
    },
    logoContainer: {
        width: '65%',
        height: '100%',
        resizeMode: 'contain',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        width: '60%',
        height: '100%',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    buttonContainer: {
        backgroundColor: COLORS.primary,
        width: 140,
        height: 40,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 20,
        position: 'absolute',
        bottom: 20,
        right: 30,
    },
    wrapper: {
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    image2: {
        width: '100%',
        height: '20%',
    },
    image3: {
        width: '100%',
        height: '65%',
    },
    button: {
    },
    buttonText: {
        color: 'white',
        paddingLeft: 0,
        fontWeight: 'bold',
    },
    backContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        marginRight: 15,
        marginBottom: 40

    },
    backButton: {
        backgroundColor: 'transparent',
    },
    backText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3D405B',
    },
    boxText: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingLeft: 20,
        paddingBottom: 20,
    },
    box1: {
        width: 156,
        height: 150,
        backgroundColor: '#3D405B',
        borderRadius: 10,
        justifyContent: 'flex-end'
    },
    box2: {
        width: 156,
        height: 150,
        backgroundColor: '#EE6C4D',
        borderRadius: 10,
        justifyContent: 'flex-end',
        marginLeft: 20
    },
    title: {
        fontSize: 40,
        color: '#3D405B',
        textAlign: 'center',
        fontWeight: '700'
    },
    title2: {
        fontSize: 40,
        color: '#EE6C4D',
        textAlign: 'center',
        fontWeight: '700'
    },
    text: {
        fontSize: 16,
        color: '#3D405B',
        paddingTop: 10
    },
}); export default AppSplash;
