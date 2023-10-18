import { COLORS } from "@/theme";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import AppCustomHeader from "../AppCustomHeader";
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType, Routes } from '@/navigation';
import AppCustomTopTabBar from "../AppCustomTopTabBar";
import AppCouchingCourseComponent from "../AppCoachingCourseComponent";
import AppChallengeComponent from "../AppChallengeComponent";
import AppWorkoutComponent from "../AppWorkoutComponent";
import AppMultiplayerComponent from "../AppMultiplayerComponent";

const AppSportsCenter = () => {

    const [activeTab, setActiveTab] = useState<number>(0);
    const tabs: string[] = ['Coaching', 'Challenge', 'Workout', 'Multiplayer'];

    const handleTabPress = (index: number) => {
        setActiveTab(index);
    };
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <View style={styles.container}>
            <AppCustomHeader navigation={navigation} onLogo={true} />
            <AppCustomTopTabBar
                tabs={tabs}
                activeTab={activeTab}
                onTabPress={handleTabPress}
            />
            <View style={styles.tabContent}>
                {activeTab === 0 && <AppCouchingCourseComponent onPress={(id) => navigation.navigate(Routes.COACHINGCOURSE_DETAILS, { id })} />}
                {activeTab === 1 && <AppChallengeComponent onPress={(id) => navigation.navigate(Routes.CHALLENGE_DETAILS, { id })} />}
                {activeTab === 2 && <AppWorkoutComponent onPress={(id) => navigation.navigate(Routes.WORKOUT_DETAILS, { id })} />}
                {activeTab === 3 && <AppMultiplayerComponent onPress={(id) => navigation.navigate(Routes.MULTIPLAYER_DETAILS, { id })} />}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
    },
    tabContent: {
        flex: 1,
    },
});
export default AppSportsCenter;
