import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import AppCustomHeader from '../AppCustomHeader';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import AppColoredCards2 from '../AppColoredCards2';
import { COLORS } from '@/theme';
import AppBarChart from '../AppBarChart';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType, Routes } from '@/navigation';
import { BleManager, State } from 'react-native-ble-plx';
import useBLE from '@/hooks/useBLE';

const AppWorkoutDetailsComponent: React.FC = ({ }) => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    const {
        requestPermissions,
        scanForPeripherals,
        allDevices,
        connectToDevice,
        connectedDevice,
        disconnectFromDevice,
        distance,
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
        navigation.navigate(Routes.WORKOUTDETAILS_SCREEN);
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
        <View style={styles.container}>
            <AppCustomHeader title="Records of Workouts" onBack={() => navigation.goBack()} navigation={navigation} onLogo={false} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    <View style={styles.contentContainer2}>
                        <AnimatedCircularProgress
                            size={200}
                            width={15}
                            fill={80}
                            duration={2000}
                            tintColor={COLORS.primary}
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor="#ccc"
                            style={{ alignItems: 'center', paddingTop: '7%', paddingBottom: '7%' }}
                        >
                            {(fill) => (
                                <View style={styles.progressBarTextContainer}>
                                    <Text style={styles.progressBarText}>0 m</Text>
                                </View>
                            )}
                        </AnimatedCircularProgress>
                    </View>
                    <View style={styles.container2}>
                        <AppColoredCards2
                            title="Total Duration"
                            color={COLORS.primary}
                            description="0 min"
                            cardColor={COLORS.cardBackgroundCOlor}
                            imageSource={require('../../../assets/images/times.png')}
                        />
                        <AppColoredCards2
                            title="Exercise Times"
                            color={COLORS.primary}
                            description="0"
                            cardColor={COLORS.cardBackgroundCOlor}
                            imageSource={require('../../../assets/images/bike.png')}
                        />
                        <AppColoredCards2
                            title="Total  Calories"
                            color={COLORS.primary}
                            description="0 kcal"
                            cardColor={COLORS.cardBackgroundCOlor}
                            imageSource={require('../../../assets/images/calories.png')}
                        />
                    </View>
                    <View style={styles.card}>
                        <Image source={require('../../../assets/images/milage.png')} style={styles.logoContainer} />
                        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                            <Text style={styles.title}>Cycling Milage</Text>
                            <Text style={styles.description}>0 m</Text>
                        </View>
                    </View>
                    <AppBarChart />
                </View>
            </ScrollView>
        </View>
    )
}

export default AppWorkoutDetailsComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
    },
    logoContainer: {
        width: 120,
        height: 120,
        marginRight: -20,
        marginLeft: -10
    },

    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    progressBarTextContainer: {
        position: 'absolute',
        paddingTop: '80%',
        paddingLeft: '50%',
        transform: [{ translateX: -30 }, { translateY: -30 }],
        alignItems: 'center',
        justifyContent: 'center'
    },
    progressBarText: {
        fontSize: 21,
        fontWeight: '600',
        color: 'black',
        top: 7
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingRight: '10%',
        color: COLORS.primary
    },
    icon2: {
        backgroundColor: COLORS.backgroundColor,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginLeft: 8,
    },
    contentContainer2: {
        flex: 1,
        padding: 8
    },
    image: {
        width: 140,
        height: 140,
        resizeMode: 'cover',
        borderRadius: 12,
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8,
        width: '94%',
    },
    contentContainer3: {
        flex: 1,
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'left',
        padding: 12,
        paddingRight: '12%',
        color: 'black',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 3,
        borderRadius: 12,
        margin: 8,
        width: '90%',
        height: 70,
        backgroundColor: COLORS.cardBackgroundCOlor,
        marginTop: 0
    },
    iconContainer: {
        width: '60%',
        height: '60%',
    },
    title: {
        fontSize: 13,
        fontWeight: 'bold',
        paddingLeft: 0,
        color: COLORS.primary
    },
});
