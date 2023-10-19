import React from "react";
import { View, StyleSheet, ScrollView, Pressable, Text, Platform } from "react-native";
import AppCustomHeader from "../AppCustomHeader";
import AppLable from "../AppLable";
import AppDeviceCard from "../AppDeviceCard";
import { COLORS } from "@/theme";
import AppBrandCard from "../AppBrandCard";
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType, Routes } from '@/navigation';
import Feather from "react-native-vector-icons/Feather";


interface ConnectDevicesProps {
    onPress: () => void;
    brandsNavigate: () => void;
}
const AppConnectDevices: React.FC<ConnectDevicesProps> = ({ onPress, brandsNavigate }) => {

    const brands = [
        { name: 'asviva', uri: 'https://static.kinomap.com/manufacturer/asviva.png' },
        { name: 'adidas', uri: 'https://static.kinomap.com/manufacturer/adidas.png' },
        { name: 'alinco', uri: 'https://static.kinomap.com/manufacturer/alinco.png' },
        { name: 'abilica', uri: 'https://static.kinomap.com/manufacturer/abilica.png' },
        { name: 'anyrun', uri: 'https://static.kinomap.com/manufacturer/anyrun.png' },
        { name: 'attacus', uri: 'https://static.kinomap.com/manufacturer/attacus.png' }
    ];
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <View style={styles.container}>
            <AppCustomHeader title="Connect the Devices" onBack={() => { navigation.goBack() }} navigation={navigation} onLogo={false} />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentContainer}>
                <AppLable title="Devices" />
                <AppDeviceCard
                    title="Cycling"
                    cardColor={COLORS.cardBackground}
                    imageSource={require('../../../assets/images/exercise.png')}
                    onPress={onPress}
                />
                <AppDeviceCard
                    title="Apple Watch"
                    cardColor={COLORS.cardBackground}
                    imageSource={require('../../../assets/images/connect-4.png')}
                    onPress={onPress}
                />
                <AppDeviceCard
                    title="Standard Heart Rate Device"
                    cardColor={COLORS.cardBackground}
                    imageSource={require('../../../assets/images/connect-5.png')}
                    onPress={onPress}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                    <AppLable title="Brands" />
                    <Pressable style={{ flexDirection: 'row', paddingTop: 10, paddingRight: 15 }} onPress={brandsNavigate}>
                        <Text style={{ paddingTop: 3, color: '#636363', fontSize: 14 }}>View more</Text>
                        <Feather name="chevron-right" size={16} color="#636363" style={Platform.OS === 'ios' ? { paddingTop: 4 } : { paddingTop: 5 }} />
                    </Pressable>
                </View>
                <View style={styles.brandsContainer}>
                    {brands.map((brand, index) => (
                        <AppBrandCard key={index} imageSource={{ uri: brand.uri }} />
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundColor
    },
    contentContainer: {
        flex: 1,
        padding: 8
    },
    brandsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
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
    duration: {
        fontSize: 15
    },
    difficulty: {
        fontSize: 15
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        paddingLeft: 10
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    button: {
        color: COLORS.primary,
        fontWeight: 'bold',
        paddingTop: 1
    }
});

export default AppConnectDevices;