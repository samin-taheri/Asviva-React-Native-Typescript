import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppCard from '../AppCard';
import { COLORS } from '@/theme';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface ProgressBarProps {
    progress: number;
}
const AppProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    const [isProgressCompleted, setIsProgressCompleted] = useState(false);

    useEffect(() => {
        if (progress === 100) {
            setIsProgressCompleted(true);
        } else {
            setIsProgressCompleted(false);
        }
    }, [progress]);

    return (
        <View style={styles.container}>
            {isProgressCompleted ? (
                <View style={styles.successContainer}>
                    <Text style={styles.successText}>Downloaded!</Text>
                </View>
            ) : (
                <View style={styles.percentageContainer}>
                    <Text style={styles.progressText}>{`${progress}%`}</Text>
                </View>
            )}
            <View style={styles.progressBar}>
                <View style={[styles.progress, { width: `${progress}%` }]} />
                <View style={styles.scrollBar} />
            </View>
        </View>
    );
};

const AppProgressBar2: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const startLoading = () => {
        setLoading(true);
        setProgress(0);

        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress < 100) {
                    return prevProgress + 10;
                } else {
                    clearInterval(interval);
                    setLoading(false);
                    return prevProgress;
                }
            });
        }, 1000);
    };

    return (
        <View style={styles.container}>
            <AppCard>
                <View style={styles.textContainer}>
                    <View style={styles.iconContainer}>
                        {!loading ? (
                            <TouchableOpacity
                                style={styles.icon}
                                onPress={startLoading}
                                disabled={loading}
                            >
                                <MaterialCommunityIcons
                                    name="download-outline"
                                    size={20}
                                    color={COLORS.gray}
                                />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                style={styles.icon}
                                onPress={startLoading}
                                disabled={loading}
                            >
                                <Feather
                                    name="loader"
                                    size={20}
                                    color={COLORS.gray}
                                />
                            </TouchableOpacity>
                        )}
                        <Text style={styles.introTitle}>{loading ? 'Loading' : 'Download'}</Text>
                    </View>
                    <AppProgressBar progress={progress} />
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', borderWidth: 1.5, borderColor: '#e2e2e2', borderStyle: 'dashed', borderRadius: 12, marginTop: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Feather
                                name="flag"
                                size={20}
                                color={COLORS.gray}
                                style={{ marginTop: 8, marginLeft: 10 }}
                            />
                            <Text style={styles.introTitle}>Contest</Text>
                        </View>
                        <Text style={styles.introTitle}>0</Text>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', borderWidth: 1.5, borderColor: '#e2e2e2', borderStyle: 'dashed', borderRadius: 12, marginBottom: 10, marginTop: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Feather
                                name="users"
                                size={20}
                                color={COLORS.gray}
                                style={{ marginTop: 8, marginLeft: 10 }}
                            />
                            <Text style={styles.introTitle}>Square</Text>
                        </View>
                        <Text style={styles.introTitle}>19</Text>
                    </View>
                </View>
            </AppCard>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        paddingTop: 0
    },
    textContainer: {
        flex: 1,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: COLORS.cardBackground,
        alignContent: 'center',
        marginTop: 5,
        padding: 0,
        width: 160,
        height: 50,
    },
    successContainer: {
        borderRadius: 12,
        backgroundColor: '#eaefe7',
        width: 120,
        height: 30,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 10
    },
    percentageContainer: {
        borderRadius: 12,
        backgroundColor: COLORS.backgroundColor,
        width: 50,
        height: 30,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 10
    },
    introTitle: {
        fontSize: 14,
        fontWeight: "bold",
        padding: 10,
        textAlign: 'left',
    },
    button: {
        backgroundColor: '',
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
        width: 120
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    icon: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: 'gray'
    },
    progressBar: {
        height: 12,
        backgroundColor: '#d7d7d7',
        position: 'relative',
        borderRadius: 12,
    },
    progress: {
        height: '100%',
        backgroundColor: '#a3a3a3',
        position: 'absolute',
        borderRadius: 12,
    },
    scrollBar: {
        width: 3,
        height: '100%',
        position: 'absolute',
        right: 0,
    },
    progressText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#848484',
    },
    successText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#537d3c',
    },
});

export default AppProgressBar2;
