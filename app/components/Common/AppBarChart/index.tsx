import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import AppCard from '../AppCard';
import { COLORS } from '@/theme';

const AppBarChart = () => {
    const formatXLabel = (label: string) => {
        return label;
    };

    return (
        <View style={styles.container}>
            <AppCard>
                <BarChart
                    data={{
                        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                        datasets: [
                            {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                ],
                            },
                        ],
                    }}
                    width={320}
                    height={170}
                    yAxisLabel=""
                    yAxisSuffix=""
                    chartConfig={{
                        backgroundColor: "#fff",
                        backgroundGradientFrom: "#fff",
                        backgroundGradientTo: "#fff",
                        decimalPlaces: 0,
                        color: (opacity = 1) => COLORS.primary,
                        labelColor: (opacity = 1) => COLORS.gray,
                        style: {

                        },
                        strokeWidth: 10,
                        propsForDots: {
                            r: "0",
                            strokeWidth: "0",
                            stroke: "#fff",
                        },
                        barPercentage: 0.45,
                        formatXLabel,
                        propsForBackgroundLines: {
                            strokeWidth: 0
                        }
                    }}
                    style={{
                        marginLeft: -15,
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                />
            </AppCard>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '93%'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default AppBarChart;
