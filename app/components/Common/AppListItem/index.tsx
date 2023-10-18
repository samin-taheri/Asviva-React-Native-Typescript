import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ListItemProps {
    iconName: string;
    itemText: string;
    style?: any;
}

const AppListItem: React.FC<ListItemProps> = ({ iconName, itemText, style }) => {
    return (
        <View style={styles.itemContainer}>

            <Text style={style}>{itemText}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
        paddingBottom: 20,
        borderColor: "#c8c8c8",
        borderBottomWidth: 0.2,
    },
    iconRight: {
        marginRight: 0,
    }
});

export default AppListItem;
