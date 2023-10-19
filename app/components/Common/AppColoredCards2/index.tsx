import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { ImageSourcePropType } from "react-native";
import Text from '../Text';

interface ColoredCards2Props {
    title: string;
    description: string;
    cardColor?: string;
    imageSource: ImageSourcePropType;
    color: string;
}
const windowWidth = Dimensions.get('window').width;

const AppColoredCards2: React.FC<ColoredCards2Props> = ({ title, description, imageSource, cardColor, color }) => {
    const cardWidth = (windowWidth - 53) / 3;

    return (
        <View style={[styles.card, { backgroundColor: cardColor, width: cardWidth }]}>
            <View style={{ width: 15, height: 15, alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginRight: 10 }}>
                <Image source={imageSource} style={styles.image} />
            </View>
            <Text style={[styles.title, { color: color }]}>{title}</Text>
            <Text style={[styles.description, { color: color }]}>{description}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 8,
        borderRadius: 12,
    },
    icon: {
        marginBottom: 10,
    },
    gradient: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 13,
        fontWeight: '600',
        paddingTop: 30,
        textAlign: 'center'
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 4
    },
    image: {
        width: 120,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 12,
        marginTop: 20
    },
});

export default AppColoredCards2;
