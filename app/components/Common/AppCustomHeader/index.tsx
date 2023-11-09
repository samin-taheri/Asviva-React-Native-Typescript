import React from 'react';
import { View, StyleSheet, Platform, Image, Pressable, TouchableOpacity } from 'react-native';
import { Routes } from '@/navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import Text from '../Text';
import { COLORS } from '@/theme';

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
                <TouchableOpacity onPress={onBack} style={{ paddingTop: '2%', paddingLeft: '5%' }}>
                    <Feather name="arrow-left" size={30} color={'#000'} />
                </TouchableOpacity>
            )}
            <View style={styles.titleContainer}>
                <Text style={[styles.title, onBack ? styles.withPadding : null]}>{title}</Text>
            </View>
            {onLogo && (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: Platform.OS === 'ios' ? '10%' : '1%' }}>
                    <View style={styles.leftContainer}>
                        <Text style={{ fontSize: 21, fontWeight: 'bold', color: COLORS.primary }}>Location</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: Platform.OS === 'ios' ? '35%' : '40%' }}>
                        <Feather name="map-pin" size={20} color={COLORS.primary} style={{ paddingRight: 20 }} />
                        <Feather name="bell" size={20} color={COLORS.primary} style={{ paddingRight: 20 }} />
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
    logoImage: {
        width: 125,
        height: 125,
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: Platform.OS === 'ios' ? '0%' : '2.5%'
    },
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        height: Platform.OS === 'ios' ? 90 : 70,
    },
    leftContainer: {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: '6%'
    },
});

export default AppCustomHeader;

