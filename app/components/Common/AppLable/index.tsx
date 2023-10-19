import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "../Text";

interface LableProps {
    title: string;
}

const AppLable: React.FC<LableProps> = ({ title }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        fontWeight: "bold",
        paddingBottom: 9,
        paddingTop: 12,
        paddingLeft: 10
    }
});

export default AppLable;
