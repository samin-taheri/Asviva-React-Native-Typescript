import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Pressable, Platform, TouchableOpacity } from "react-native";
import AppCustomHeader from "../AppCustomHeader";
import AppLable from "../AppLable";
import AppDeviceCard from "../AppDeviceCard";
import { COLORS } from "@/theme";
import AppBrandCard from "../AppBrandCard";
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType, Routes } from '@/navigation';
import Feather from "react-native-vector-icons/Feather";
import Text from "../Text";
import { BleManager, State } from "react-native-ble-plx";
import useBLE from "@/hooks/useBLE";
import PulseIndicator from "../AppPulseIndicator";
import DeviceModal from "../AppDeviceModal";
import { useDialog } from "@/hooks";


interface ConnectDevicesProps {
    brandsNavigate: () => void;
}
const AppConnectDevices: React.FC<ConnectDevicesProps> = ({ brandsNavigate }) => {

    const brands = [
        { name: 'asviva', uri: 'https://static.kinomap.com/manufacturer/asviva.png' },
        { name: 'adidas', uri: 'https://static.kinomap.com/manufacturer/adidas.png' },
        { name: 'alinco', uri: 'https://static.kinomap.com/manufacturer/alinco.png' },
        { name: 'abilica', uri: 'https://static.kinomap.com/manufacturer/abilica.png' },
        { name: 'anyrun', uri: 'https://static.kinomap.com/manufacturer/anyrun.png' },
        { name: 'attacus', uri: 'https://static.kinomap.com/manufacturer/attacus.png' }
    ];
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    const {
        requestPermissions,
        scanForPeripherals,
        allDevices,
        connectToDevice,
        connectedDevice,
        disconnectFromDevice,
    } = useBLE();
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const scanForDevices = () => {
        requestPermissions(isGranted => {
            if (isGranted) {
                scanForPeripherals();
            }
        });
    };

    const hideModal = () => {
        setIsModalVisible(false);
    };

    const openModal = async () => {
        scanForDevices();
        setIsModalVisible(true);
    };
    const manager = new BleManager()

    useEffect(() => {
        const subscription = manager.onStateChange((state: State) => {
            if (state === 'PoweredOn') {
                scanForPeripherals();
                subscription.remove();
            }
        }, true);

        return () => {
            subscription.remove();
        };
    }, [manager]);

    const onPress = () => {
        connectedDevice ? disconnectFromDevice() : openModal()
    };

    const onPress2 = () => {
        navigation.navigate(Routes.LOADING_SCREEN)
    };
    const dialog = useDialog();

    useEffect(() => {
        if (connectedDevice) {
            dialog.show({
                type: 'success',
                position: 'left',
                title: 'Connection Successfull',
                message: `Device ID: ${connectedDevice.id}`,
                action: [
                    {
                        text: 'Ok',
                        style: 'cancel',
                    },
                ],
            });
        }
    });

    return (
        <View style={styles.container}>
            <AppCustomHeader title="connect_the_devices" onBack={() => { navigation.goBack() }} navigation={navigation} onLogo={false} />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentContainer}>
                <AppLable title="Devices" />
                <AppDeviceCard
                    title={connectedDevice ? `Disconnect:${connectedDevice.id}` : "Cycling"}
                    cardColor={COLORS.cardBackground}
                    imageSource={require('../../../assets/images/exercise.png')}
                    onPress={onPress}
                />
                <AppDeviceCard
                    title="apple_watch"
                    cardColor={COLORS.cardBackground}
                    imageSource={require('../../../assets/images/connect-4.png')}
                    onPress={onPress2}
                />
                <AppDeviceCard
                    title="standard_heart_rate_device"
                    cardColor={COLORS.cardBackground}
                    imageSource={require('../../../assets/images/connect-5.png')}
                    onPress={onPress2}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                    <AppLable title="brands" />
                    <Pressable style={{ flexDirection: 'row', paddingTop: 10, paddingRight: 15 }} onPress={brandsNavigate}>
                        <Text style={{ paddingTop: 3, color: '#636363', fontSize: 14 }}>view_more</Text>
                        <Feather name="chevron-right" size={16} color="#636363" style={Platform.OS === 'ios' ? { paddingTop: 4 } : { paddingTop: 5 }} />
                    </Pressable>
                </View>
                <View style={styles.brandsContainer}>
                    {brands.map((brand, index) => (
                        <AppBrandCard key={index} imageSource={{ uri: brand.uri }} />
                    ))}
                </View>
                {/* <View>
                    {connectedDevice ? (
                        <>
                            <PulseIndicator />
                            <Text style={{ color: 'black' }}>Your Heart Rate Is: 0 bpm</Text>
                        </>
                    ) : (
                        <Text style={{ color: 'black' }}>
                            Please Connect to a Monitor
                        </Text>
                    )}
                </View> */}

                {/* <TouchableOpacity
                    onPress={connectedDevice ? disconnectFromDevice : openModal}>
                    <Text style={{ color: 'black' }}>
                        {connectedDevice ? 'Disconnect' : 'Connect'}
                    </Text>
                </TouchableOpacity> */}
                <DeviceModal
                    closeModal={hideModal}
                    visible={isModalVisible}
                    connectToPeripheral={connectToDevice}
                    devices={allDevices}
                />
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