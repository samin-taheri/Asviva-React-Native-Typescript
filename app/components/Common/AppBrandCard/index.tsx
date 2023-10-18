import React from 'react';
import { View, StyleSheet, Image, ImageSourcePropType } from 'react-native';

interface BrandCardProps {
    imageSource: ImageSourcePropType;
    style?: any;
}
const AppBrandCard: React.FC<BrandCardProps> = ({ imageSource, style }) => {
    return (
        <View style={[styles.cardContainer, style]}>
            <Image source={imageSource} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: '45%',
        backgroundColor: 'white',
        padding: 16,
        margin: 8,
        borderRadius: 8,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 8,
        fontSize: 14,
    },
    image: {
        width: 120,
        height: 60,
    },
});

export default AppBrandCard;
