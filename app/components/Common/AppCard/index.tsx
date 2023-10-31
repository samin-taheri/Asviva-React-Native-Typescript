import React from "react";
import { View, StyleSheet } from "react-native";
import { ReactNode } from "react";
import { ViewStyle } from 'react-native';

interface CardProps {
    children: ReactNode;
    style?: ViewStyle;
}
const AppCard: React.FC<CardProps> = ({ children, style }) => {
    return (
        <View style={[styles.card, style]}>
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#ffffff",
        borderRadius: 12,
        padding: 16,
        margin: 8,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});

export default AppCard;
