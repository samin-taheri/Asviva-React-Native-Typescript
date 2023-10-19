import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, Pressable } from 'react-native';
import { ImageSourcePropType } from "react-native";
import { COLORS } from '@/theme';
import AppLable from '../AppLable';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { useTranslate } from '@/hooks';
import { Text } from '@/components';

interface BackgroundCardProps {
    title: string;
    backgroundImage: ImageSourcePropType;
    onPress: () => void;
    params?: object;
    children?: string | string[];
}
const AppBackgroundCard: React.FC<BackgroundCardProps> = ({ title, backgroundImage, onPress, params, children }) => {

    return (
        <View>
            <AppLable title="physical_fitness_test" />
            <View style={{ padding: 8 }}>
                <View style={styles.cardContainer}>
                    <ImageBackground source={backgroundImage} style={styles.cardBackground}>
                        <View style={[styles.cardContent, { backgroundColor: 'rgba(255, 255, 255, 0.77)' }]}>
                            <Entypo name="dot-single" color={COLORS.primary} size={30} />
                            <Text style={styles.title}>{title}</Text>
                            <Pressable style={styles.buttonContainer} onPress={onPress}>
                                <Text style={styles.button}>Start</Text>
                                <Feather name="chevron-right" size={20} color='white' style={{ marginRight: 15 }} />
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
        marginTop: 95,
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
        backgroundColor: COLORS.primary,
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
