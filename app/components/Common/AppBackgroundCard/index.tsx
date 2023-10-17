import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Pressable } from 'react-native';
import { ImageSourcePropType } from "react-native";
import { COLORS } from '@/theme';

interface BackgroundCardProps {
    title: string;
    backgroundImage: ImageSourcePropType;
    onPress: () => void;
}
const AppBackgroundCard: React.FC<BackgroundCardProps> = ({ title, backgroundImage, onPress }) => {
    return (
        <View>
            <View style={{ padding: 8 }}>
                <View style={styles.cardContainer}>
                    <ImageBackground source={backgroundImage} style={styles.cardBackground}>
                        <View style={[styles.cardContent, { backgroundColor: 'rgba(255, 255, 255, 0.77)' }]}>
                            <Text style={styles.title}>{title}</Text>
                            <Pressable style={styles.buttonContainer} onPress={onPress}>
                                <Text style={styles.button}>Start</Text>
                            </Pressable>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        overflow: 'hidden',
        borderRadius: 12,
    },
    cardBackground: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    cardContent: {
        padding: 14,
        width: '93%',
        marginLeft: '3.5%',
        marginTop: '27%',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        paddingRight: '32%',
    },
    buttonContainer: {
        backgroundColor: COLORS.gray,
        width: 80,
        height: 30,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 'auto',
    },
    button: {
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 1,
        paddingLeft: 20
    }
});

export default AppBackgroundCard;
