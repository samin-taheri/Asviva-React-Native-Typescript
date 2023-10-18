import React from "react";
import { View, Text, StyleSheet, ImageBackground, Pressable } from "react-native";

interface ChallengeCardProps {
    imageSource: { uri: string };
    title: string;
    user: string;
    loc: string;
    id: string;
    onPress: (id: string) => void;
}
const AppChallengeCard: React.FC<ChallengeCardProps> = ({
    imageSource,
    title,
    user,
    loc,
    id,
    onPress
}) => {
    return (
        <View style={styles.cardContainer}>
            <Pressable style={styles.card} onPress={() => onPress(id)}>
                <ImageBackground source={imageSource} style={styles.cardBackground}>
                    <View style={styles.card}>
                        <View style={styles.content}>
                            <View style={styles.textContainer}>
                                <Text style={styles.title}>{title}</Text>
                            </View>
                            <View style={styles.iconContainers}>
                                <View style={styles.iconContainer}>

                                    <Text style={{ fontSize: 11, color: "#fff" }}>{user}</Text>
                                </View>
                                <View style={[styles.iconContainer, { marginLeft: 10 }]}>

                                    <Text style={{ fontSize: 11, color: "#fff" }}>{loc}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        position: "relative",
        marginBottom: 10,
    },
    cardBackground: {
        width: 200,
        height: 220,
        borderRadius: 12,
        overflow: "hidden",
        margin: 8,
    },
    card: {
        flex: 1,
        backgroundColor: "rgba(255, 255, 255, 0)",
    },
    content: {
        flex: 1,
        padding: 16,
        justifyContent: "space-between",
    },
    textContainer: {
        justifyContent: "flex-end",
        marginBottom: 15
    },
    iconContainers: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    iconContainer: {
        alignItems: "center",
        borderRadius: 12,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        flexDirection: "row",
        alignContent: "flex-end",
        padding: 6,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#fff",
        paddingTop: 130,
    },
    description: {
        fontSize: 14,
        color: "#fff",
    },
});

export default AppChallengeCard;
