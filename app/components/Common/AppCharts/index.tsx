import { COLORS } from "@/theme";
import React from "react";
import { View, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { ReactNode } from "react";
import AppLable from "../AppLable";
import AppCard from "../AppCard";
import AppStatsCard from "../AppStatsCard";

interface ChartProps {
    children?: ReactNode;
}
const data = {
    labels: ["0", "10.4", "10.5", "10.6", "10.7", "10.8", "10.9", "Today"],
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
                Math.random() * 100
            ],
            color: (opacity = 1) => COLORS.primary,
            strokeWidth: 1
        }
    ],
};

const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    decimalPlaces: 0,
    color: (opacity = 0.2) => `rgba(0, 0, 0, ${opacity})`,
};

const AppChart: React.FC<ChartProps> = ({ }) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <AppLable title="Today's Workout" />
            </View>
            <AppCard>
                <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 10, paddingLeft: '2%' }}>
                        <AppStatsCard title="Workouts" value="0 min" />
                        <AppStatsCard title="Calories" value="0 kcal" />
                        <AppStatsCard title="Clock In" value="0 day" />
                    </View>
                    <LineChart
                        style={{ padding: 7, marginLeft: -22 }}
                        data={data}
                        width={350}
                        height={200}
                        chartConfig={chartConfig}
                    />
                </View>
            </AppCard>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default AppChart;
