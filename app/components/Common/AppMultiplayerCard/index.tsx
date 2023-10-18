import React from "react";
import { View, Text, StyleSheet, ImageBackground, Pressable } from "react-native";

interface MultiplayerCardProps {
    imageSource: { uri: string };
    title: string;
    isLive: boolean;
    km: string;
    date: string;
    min: string;
    id: string;
    onPress: (id: string) => void;
}
const AppMultiplayerCard: React.FC<MultiplayerCardProps> = ({
    imageSource,
    title,
    km,
    isLive,
    min,
    date,
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

                                    <Text style={{ fontSize: 11, color: "#fff" }}>{min}</Text>
                                </View>
                                <View style={[styles.iconContainer, { marginLeft: 10 }]}>

                                    <Text style={{ fontSize: 11, color: "#fff" }}>{km}</Text>
                                </View>
                            </View>
                            {isLive ?
                                <View style={styles.iconTopRightContainer}>
                                    <Text style={styles.subtitle2}>Live</Text>
                                </View>
                                : null}
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
    subtitle2: {
        fontSize: 14,
        fontWeight: '600'
    },
    iconTopRightContainer: {
        position: 'absolute',
        top: 13,
        padding: 7,
        right: 13,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: 'rgba(53,124,66,0.3)',
        flexDirection: 'row',
        alignContent: 'center',
        flex: 1,
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

export default AppMultiplayerCard;
