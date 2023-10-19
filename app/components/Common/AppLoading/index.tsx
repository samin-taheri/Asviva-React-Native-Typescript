import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AppCustomHeader from '../AppCustomHeader';
import { COLORS } from '@/theme';
import AppMyloader from '../AppMyLoader';
import Text from '../Text';

interface LoadingProps {
    navigation: any;
}
const AppLoading: React.FC<LoadingProps> = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <View style={styles.container}>
            <AppCustomHeader title="device_pairing" onBack={() => navigation.goBack()} navigation={navigation} onLogo={false} />
            <>
                {isLoading ?
                    <View style={styles.contentContainer}>
                        <AppMyloader title='searching' image={require('../../../assets/images/power-bike-5.png')} />
                    </View>
                    :
                    <View style={styles.contentContainer}>
                        <Image source={require("../../../assets/images/oops.png")} style={styles.image} />
                        <Text style={styles.text}>no_device_found</Text>
                    </View>
                }
            </>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>search_again</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        marginTop: 20,
        fontSize: 18,
        color: COLORS.primary,
        fontWeight: '600',
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100
    },
    image: {
        width: 200,
        height: 220,
        borderRadius: 8,
        marginLeft: 16,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: '2%',
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
export default AppLoading;