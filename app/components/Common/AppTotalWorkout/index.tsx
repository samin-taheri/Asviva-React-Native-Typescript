import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppLable from '../AppLable';
import AppColoredCards2 from '../AppColoredCards2';
import { COLORS } from '@/theme';

const AppTotalWorkout: React.FC = () => {
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
                <AppColoredCards2
                    title="total_calories"
                    color={COLORS.primary}
                    description="0 kcal"
                    cardColor={COLORS.cardBackgroundCOlor}
                    imageSource={require('../../../assets/images/calories.png')}
                />
            </View>
            <View style={[styles.container, { marginTop: -8 }]}>
                <AppColoredCards2
                    title="distance"
                    color={COLORS.primary}
                    description="0 meter"
                    cardColor={COLORS.cardBackgroundCOlor}
                    imageSource={require('../../../assets/images/map.png')}
                />
                <AppColoredCards2
                    title="energy"
                    color={COLORS.primary}
                    description="0 watt"
                    cardColor={COLORS.cardBackgroundCOlor}
                    imageSource={require('../../../assets/images/energy-4.png')}
                />
                <AppColoredCards2
                    title="pulse"
                    color={COLORS.primary}
                    description="0 bpm"
                    cardColor={COLORS.cardBackgroundCOlor}
                    imageSource={require('../../../assets/images/pulse.png')}
                />
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
