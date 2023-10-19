import { COLORS } from '@/theme';
import React from 'react'

import { SafeAreaView, Image, StyleSheet } from 'react-native';
import { ImageSourcePropType } from "react-native";
import Text from '../Text';

interface MyLoaderProps {
    title?: string;
    image?: ImageSourcePropType;
}
const AppMyloader: React.FC<MyLoaderProps> = ({ title, image }) => {
    return (
        <SafeAreaView style={styles.contentContainer}>
            {image &&
                <Image source={image} style={styles.image2} />
            }
            <Image source={require("../../../assets/images/loader.gif")} style={styles.image} />
            <Text style={styles.text}>{title}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: COLORS.primary,
        fontWeight: '600',
    },
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 120,
        height: 120,
    },
    image2: {
        width: 150,
        height: 150,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        width: '90%',
        height: '10%',
        alignItems: 'center',
        paddingLeft: '10%',
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 15,
        width: '100%',
        alignItems: 'center',
        borderRadius: 12,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
});


export default AppMyloader;