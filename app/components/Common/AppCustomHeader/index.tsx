import React from 'react';
import { View, Text, StyleSheet, Platform, Image, Pressable } from 'react-native';
import AppButton from '../AppButton';
import { COLORS } from '@/theme';
import { Routes } from '@/navigation';

interface CustomHeaderProps {
    title?: string;
    onBack?: () => void;
    navigation: any;
    onLogo: boolean;
}
const AppCustomHeader: React.FC<CustomHeaderProps> = ({ title, onBack, onLogo, navigation }) => {

    return (
        <View style={styles.container}>
            {onBack && (
                <AppButton pt-30 pl-20 w-40 h-40 type="icon" icon={'chevronLeft'} iconSize={26} iconColor={COLORS.black} onPress={() => navigation.goBack()} />
            )}
            <View style={styles.titleContainer}>
                <Text style={[styles.title, onBack ? styles.withPadding : null]}>{title}</Text>
            </View>
            {onLogo && (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10%' }}>
                    <View style={styles.leftContainer}>
                        <Image
                            source={require('../../../assets/images/logo.png')}
                            style={{ width: 110, height: 25 }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: Platform.OS === 'ios' ? '35%' : '40%' }}>
                        <Pressable style={{ borderRadius: 8, backgroundColor: '#e8e8e8', padding: 6, flexDirection: 'row', height: 29 }} onPress={() => navigation.navigate(Routes.CONNECTDEVICES_SCREEN)}>
                            <Text style={{ fontSize: 12, paddingRight: 3 }}>Tap to Connect</Text>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate(Routes.PROFILE_SCREEN)} style={{ marginLeft: 8, marginRight: 10 }}>
                            <Image
                                source={require('../../../assets/images/p.png')}
                                style={{ width: 120, height: 120 }}
                            />
                        </Pressable>
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '600',
        paddingTop: '9%',
    },
    withPadding: {
        paddingRight: '10%',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        height: Platform.OS === 'ios' ? 90 : 86,
    },
    leftContainer: {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: '6%'
    },
});

export default AppCustomHeader;
