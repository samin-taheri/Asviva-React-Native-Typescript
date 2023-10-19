import { COLORS } from "@/theme";
import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";

interface SimpleCardProps {
    backgroundColor: string;
    title: string;
    kcal: string;
    id: string;
    onPress: (id: string) => void;
}

const AppWorkoutCard: React.FC<SimpleCardProps> = ({
    backgroundColor,
    title,
    kcal,
    id,
    onPress
}) => {

    return (
        <Pressable style={styles.card} onPress={() => onPress(id)}>
            <LinearGradient
                colors={[backgroundColor, "#fff"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.linearGradient}
            >
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <View style={styles.iconContainer}>
                            <FontAwesome
                                name="flash"
                                size={15}
                                color={COLORS.gray}
                                style={{ paddingRight: 5 }}
                            />
                            <Text style={{ fontSize: 11 }}>{kcal}</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        margin: 8,
        width: 200,
        elevation: 1,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        shadowColor: '#000',
        height: 100,
    },
    linearGradient: {
        width: '100%',
        height: '100%',
        opacity: 0.95,
        borderRadius: 12
    },
    image: {
        width: "100%",
        height: 120,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    content: {
        padding: 16,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        flexDirection: 'row',
        alignContent: 'center',
        padding: 6
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
    },
});

export default AppWorkoutCard
    ;