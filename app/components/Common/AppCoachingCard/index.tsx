import { COLORS } from "@/theme";
import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Text from "../Text";

interface CoouchingCardProps {
    imageSource: { uri: string };
    title: string;
    user: string;
    kcal: string;
    id: string;
    onPress: (id: string) => void;
}
const AppCouchingCard: React.FC<CoouchingCardProps> = ({
    imageSource,
    title,
    user,
    kcal,
    id,
    onPress,
}) => {
    return (
        <View style={styles.cardContainer}>
            <Pressable style={styles.card} onPress={() => onPress(id)}>
                <Image source={imageSource} style={styles.image} />
                <View style={styles.card2}>
                    <View style={styles.content}>
                        <Text style={styles.title}>{title}</Text>
                        <View style={styles.iconContainers}>
                            <View style={styles.iconContainer}>
                                <MaterialCommunityIcons
                                    name="account-clock"
                                    size={20}
                                    color={COLORS.gray}
                                    style={{ paddingRight: 2 }}
                                />
                                <Text style={{ fontSize: 11 }}>{user}</Text>
                            </View>
                            <View style={[styles.iconContainer]}>
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
                </View>
            </Pressable>
        </View>
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
        height: 220,
        flex: 1
    },
    card2: {
        flex: 1,
        backgroundColor: "rgba(255, 255, 255, 0)",
    },
    cardContainer: {
        position: "relative",
        marginBottom: 10,
    },
    image: {
        width: "100%",
        height: 120,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
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
    content: {
        flex: 1,
        padding: 16,
        justifyContent: "space-between",
    },
    iconContainer: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        backgroundColor: "rgba(55,57,54,0.1)",
        flexDirection: "row",
        alignContent: "center",
        padding: 6,
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

export default AppCouchingCard;
