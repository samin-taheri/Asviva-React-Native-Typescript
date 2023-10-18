import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import AppCustomHeader from '../AppCustomHeader';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import AppColoredCards2 from '../AppColoredCards2';
import { COLORS } from '@/theme';
import AppBarChart from '../AppBarChart';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType, Routes } from '@/navigation';

const AppWorkoutDetailsComponent: React.FC = ({ }) => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

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
                                    <Text style={styles.progressBarText}>0 km</Text>
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
                            <Text style={styles.description}>0 km</Text>
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
    },
    progressBarText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
        paddingTop: '50%'
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
