import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ViewStyle } from 'react-native';
import Text from '../Text';

interface StatsCardProps {
    title: string;
    value: string;
    style?: ViewStyle;
}
const AppStatsCard: React.FC<StatsCardProps> = ({ title, value, style }) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.card}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.value}>{value}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    card: {
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#e2e2e2',
        borderRadius: 8,
        borderStyle: 'dashed',
    },
    title: {
        color: '#6c6c6c',
        fontSize: 12,
    },
    value: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingTop: 5,
    },
});

export default AppStatsCard;
