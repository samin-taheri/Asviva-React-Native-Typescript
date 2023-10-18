import { COLORS } from '@/theme';
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface SplashIconsProps { }

const AppSplashIcons: React.FC<SplashIconsProps> = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image source={require('../../../assets/images/splash-icon-1.png')} style={styles.imageIcon} />
            </View>
            <View style={styles.iconContainer}>
                <Image source={require('../../../assets/images/splash-icon-2.png')} style={styles.imageIcon} />
            </View>
            <View style={styles.iconContainer}>
                <Image source={require('../../../assets/images/splash-icon-3.png')} style={styles.imageIcon} />
            </View>
            <View style={styles.iconContainer}>
                <Image source={require('../../../assets/images/splash-icon-4.png')} style={styles.imageIcon} />
            </View>
            <View style={styles.iconContainer}>
                <Image source={require('../../../assets/images/splash-icon-6.png')} style={styles.imageIcon} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    imageIcon: {
        width: 160,
        height: 160,
        resizeMode: 'cover',
        borderRadius: 12,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        backgroundColor: COLORS.cardBackground,
        width: 58,
        height: 58,
        borderRadius: 12,
    },
});

export default AppSplashIcons;
