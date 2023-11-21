import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppLable from '../AppLable';
import AppColoredCards2 from '../AppColoredCards2';
import { COLORS } from '@/theme';
import useBLE from '@/hooks/useBLE';
import { BleManager, State } from 'react-native-ble-plx';
import PulseIndicator from '../AppPulseIndicator';
import DeviceModal from '../AppDeviceModal';


const AppTotalWorkout: React.FC = () => {

    const {
        requestPermissions,
        scanForPeripherals,
        allDevices,
        connectToDevice,
        connectedDevice,
        heartRate,
        distance,
        calories,
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


    return (
        <View>
            <View style={{ flexDirection: 'column' }}>
                <AppLable title="total_workout" />
            </View>
            <View style={styles.container}>


                <AppColoredCards2
                    title="total_duration"
                    color={COLORS.primary}
                    description="0 min"
                    cardColor={COLORS.cardBackgroundCOlor}
                    imageSource={require('../../../assets/images/times.png')}
                />
                <AppColoredCards2
                    title="exercise_times"
                    color={COLORS.primary}
                    description="0"
                    cardColor={COLORS.cardBackgroundCOlor}
                    imageSource={require('../../../assets/images/bike.png')}
                />
                {connectedDevice ? (
                    <AppColoredCards2
                        title="total_calories"
                        color={COLORS.primary}
                        description={`${calories} kcal`}
                        cardColor={COLORS.cardBackgroundCOlor}
                        imageSource={require('../../../assets/images/calories.png')}
                    />
                ) : (
                    <AppColoredCards2
                        title="total_calories"
                        color={COLORS.primary}
                        description="0 kcal"
                        cardColor={COLORS.cardBackgroundCOlor}
                        imageSource={require('../../../assets/images/calories.png')}
                    />
                )}
            </View>
            <View style={[styles.container, { marginTop: -8 }]}>
                {connectedDevice ? (
                    <AppColoredCards2
                        title="distance"
                        color={COLORS.primary}
                        description={`${distance} meter`}
                        cardColor={COLORS.cardBackgroundCOlor}
                        imageSource={require('../../../assets/images/map.png')}
                    />
                ) : (
                    <AppColoredCards2
                        title="distance"
                        color={COLORS.primary}
                        description="0 meter"
                        cardColor={COLORS.cardBackgroundCOlor}
                        imageSource={require('../../../assets/images/map.png')}
                    />
                )}
                <AppColoredCards2
                    title="energy"
                    color={COLORS.primary}
                    description="0 watt"
                    cardColor={COLORS.cardBackgroundCOlor}
                    imageSource={require('../../../assets/images/energy-4.png')}
                />
                {connectedDevice ? (
                    <AppColoredCards2
                        title="pulse"
                        color={COLORS.primary}
                        description={`${heartRate} bpm`}
                        cardColor={COLORS.cardBackgroundCOlor}
                        imageSource={require('../../../assets/images/pulse.png')}
                    />
                ) : (
                    <AppColoredCards2
                        title="pulse"
                        color={COLORS.primary}
                        description="0 bpm"
                        cardColor={COLORS.cardBackgroundCOlor}
                        imageSource={require('../../../assets/images/pulse.png')}
                    />
                )}
            </View>
            <View style={{ padding: 8 }}>
                <TouchableOpacity
                    onPress={connectedDevice ? disconnectFromDevice : openModal}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>
                        {connectedDevice ? 'Disconnect' : 'Connect'}
                    </Text>
                </TouchableOpacity>
                <DeviceModal
                    closeModal={hideModal}
                    visible={isModalVisible}
                    connectToPeripheral={connectToDevice}
                    devices={allDevices}
                />
                {connectedDevice && (
                    <>
                        <Text style={{ color: '#000', fontSize: 15, paddingTop: 10 }}>{connectedDevice.id}</Text>
                        <Text style={{ color: '#000', fontSize: 15 }}>{connectedDevice?.name}</Text>
                    </>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8
    },
});

export default AppTotalWorkout;
