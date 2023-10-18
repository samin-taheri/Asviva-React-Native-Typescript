import { View, StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import AppCustomHeader from "../AppCustomHeader";
import { COLORS } from "@/theme";
import { HomeStackNavigationPropsType, Routes } from "@/navigation";
import AppHorizontalChallengeCard from "../AppHorizontalChallengeCard";
import { useNavigation } from "@react-navigation/native";
import AppHorizontalCoachingCard from "../AppHorizontalCoachingCard";
import AppHorizontalWorkoutCard from "../AppHorizontalWorkoutCard";
import AppHorizontalMultiplayerCard from "../AppHorizontalMultiplayerCard";

const AppCycle: React.FC = ({ }) => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <View style={styles.container}>
            <AppCustomHeader navigation={navigation} onLogo={true} />
            <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
                <AppHorizontalChallengeCard onPress={(id) => navigation.navigate(Routes.CHALLENGE_DETAILS, { id })} />
                <AppHorizontalCoachingCard onPress={(id) => navigation.navigate(Routes.COACHINGCOURSE_DETAILS, { id })} />
                <AppHorizontalMultiplayerCard onPress={(id) => navigation.navigate(Routes.MULTIPLAYER_DETAILS, { id })} />
                <AppHorizontalWorkoutCard onPress={(id) => navigation.navigate(Routes.WORKOUT_DETAILS, { id })} />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
    },
    contentContainer: {
        flex: 1,
        padding: 8,
        marginBottom: '20%'
    }
});

export default AppCycle;