import React from "react";
import { View, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Text from "../Text";

interface ListItemProps {
    iconName: string;
    itemText: string;
    style?: any;
}
const iconMap: { [key: string]: React.ReactNode } = {
    "file-text": <Feather name="file-text" size={24} color="#424242" />,
    "battery-charging": <Feather name="battery-charging" size={24} color="#424242" />,
    edit: <Feather name="edit" size={24} color="#424242" />,
};

const AppListItem: React.FC<ListItemProps> = ({ iconName, itemText, style }) => {
    return (
        <View style={styles.itemContainer}>
            {iconMap[iconName]}
            <Text style={style}>{itemText}</Text>
            <Feather
                name="chevron-right"
                size={20}
                color="#424242"
                style={styles.iconRight}
            />
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
