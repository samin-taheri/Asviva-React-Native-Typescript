import React from "react";
import { View, Text, StyleSheet, Pressable, Image, ImageSourcePropType, ViewStyle } from "react-native";
import { COLORS } from "@/theme";
import Feather from "react-native-vector-icons/Feather";

interface ProfileCardProps {
    title: string;
    iconName?: string;
    onPress: () => void;
    style?: ViewStyle;
    iconColor?: string;
    selectedOption?: string;
    selectedNumber?: number;
    selectedDate?: string;
    selectedNickname?: string;
    imageSource: ImageSourcePropType
}

const AppProfileCard: React.FC<ProfileCardProps> = ({
    title,
    onPress,
    selectedOption,
    imageSource,
    selectedNumber,
    selectedNickname
}) => {
    return (

        <Pressable style={styles.card} onPress={onPress}>
            <View style={styles.iconContainer}>
                <Image source={imageSource} style={styles.image} />
            </View>
            <View style={{ flexDirection: 'column', flex: 1 }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.button}>
                    {selectedOption !== null
                        ? selectedOption
                        : selectedNumber !== null
                            ? `Selected: ${selectedNumber}`
                            : selectedNickname !== null
                                ? `Selected: ${selectedNickname}`
                                : "Please select"}
                </Text>
            </View>
            <View style={[styles.icon]}>
                <Feather
                    name="arrow-right"
                    size={20}
                    color={COLORS.gray}
                />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 12,
        margin: 6,
        backgroundColor: 'white'
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        backgroundColor: COLORS.cardBackground,
        width: 60,
        height: 60,
        borderRadius: 12,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    chevron: {},
    buttonContainer: {
        flexDirection: 'row',
        paddingLeft: '30%',
    },
    button: {
        color: '#787878',
        fontSize: 13,
        paddingLeft: 10,
        paddingTop: 8
    },
    icon: {
        backgroundColor: COLORS.cardBackground,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginRight: 10,
    },
    image: {
        width: 160,
        height: 160,
        resizeMode: 'cover',
        borderRadius: 12,
    },
});

export default AppProfileCard;
