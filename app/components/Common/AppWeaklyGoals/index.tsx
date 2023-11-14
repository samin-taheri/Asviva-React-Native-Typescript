
import { View, StyleSheet, Image, Pressable } from "react-native";
import AppLable from "../AppLable";
import React from "react";
import AppCard from "../AppCard";
import { COLORS } from "@/theme";
import Text from "../Text";

interface WeaklyGoalsProps {
    onPress?: () => void;
}

const AppWeaklyGoals: React.FC<WeaklyGoalsProps> = ({ onPress }) => {
    return (
        <View>
            <AppLable title="weekly_goals" />
            <AppCard>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>personalized_healthy_exercise_goal_customization</Text>
                    <Pressable onPress={onPress} style={styles.button}>
                        <Text style={styles.description}>start_creating</Text>
                    </Pressable>
                </View>
                <Image source={require("../../../assets/images/exersize.png")} style={styles.image} />
            </AppCard>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderColor: "rgba(0,0,0,0.1)",
        borderWidth: 1,
        backgroundColor: '#fff'
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    duration: {
        fontSize: 15
    },
    difficulty: {
        fontSize: 15
    },
    textContainer: {
        flex: 1,
    },
    image: {
        width: 110,
        height: 109,
        borderRadius: 8,
        marginLeft: 16,
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 25
    },
    description: {
        fontSize: 14,
        color: 'white',
        fontWeight: '700',
    },
    button: {
        backgroundColor: COLORS.primary,
        width: 115,
        height: 30,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    }
})
export default AppWeaklyGoals;
