import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";
import AppCard from "../AppCard";
import { COLORS } from "@/theme";
import Text from "../Text";

interface GraphProps {
    children?: ReactNode;
    onPress?: () => void;
    title?: string;
    width: number;
    height: number;
    barPercentage: number;
    color?: string;
}
const AppGraphDetails: React.FC<GraphProps> = ({ onPress, title, width, height, barPercentage, color }) => {
    return (
        <View style={{ padding: 8 }}>
            <AppCard>
                <View style={{ flexDirection: 'column' }}>
                    {title ?
                        <View style={styles.iconContainer}>
                            <Text style={styles.introTitle}>{title}</Text>
                        </View>
                        : null}

                    <BarChart
                        data={{
                            labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
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
                                        Math.random() * 100
                                    ],
                                    strokeWidth: 1
                                }
                            ],
                        }}
                        width={width}
                        height={height}
                        yAxisLabel=""
                        yAxisSuffix=""
                        chartConfig={{
                            backgroundGradientFrom: 'white',
                            backgroundGradientTo: 'white',
                            decimalPlaces: 0,
                            color: (opacity = 0.1) => color || COLORS.gray,
                            barPercentage: barPercentage,
                            propsForBackgroundLines: {
                                strokeWidth: 0
                            }
                        }}
                        style={{ right: 15 }}
                    />
                </View>
            </AppCard>
        </View>
    );
};

const styles = StyleSheet.create({
    introTitle: {
        fontSize: 14,
        fontWeight: "bold",
        padding: 10,
        textAlign: 'left',
    },
    textContainer: {
        flex: 1,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: COLORS.backgroundColor,
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 5,
        width: 120,
        marginBottom: 10
    },
});

export default AppGraphDetails;
