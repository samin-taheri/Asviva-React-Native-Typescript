import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Image, SafeAreaView, ImageSourcePropType, Pressable, ActivityIndicator } from 'react-native';
import AppMyloader from '../AppMyLoader';
import { COLORS } from '@/theme';
import Text from '../Text';


interface DataItem {
    id: string;
    title: string;
    desc: string;
    imageSource: ImageSourcePropType;
    background: string;
}
interface CouchingCourseComponentProps {
    onPress: (id: string) => void;
}

const AppWorkoutComponent: React.FC<CouchingCourseComponentProps> = ({ onPress }) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<DataItem[]>([]);


    useEffect(() => {
        // Simulate a half-second delay before loading the data
        setTimeout(() => {
            const newData: DataItem[] = [
                { id: '1', background: '#f0e5ff', desc: 'Take your first step and master riding skills', title: 'Beginner', imageSource: require('../../../assets/images/power-bike.png') },
                { id: '2', background: '#ffe5f8', desc: 'Burn more calories within limited time', title: 'Fat burning', imageSource: require('../../../assets/images/power-bike-5.png') },
                { id: '3', background: '#ecffe5', desc: 'Buil better mental and physical ability', title: 'Endurance', imageSource: require('../../../assets/images/power-bike-3.png') },
                { id: '4', background: '#ffffe5', desc: 'More explosive power and better muscle lnes', title: 'Muscle Strength', imageSource: require('../../../assets/images/power-bike-4.png') },
            ];
            setData(newData);
            setLoading(false);
        }, 500);
    }, []);

    const renderItem = ({ item }: { item: DataItem }) => {
        return (
            <View style={styles.item}>
                <Pressable style={styles.cardContainer} onPress={() => onPress(item?.id)}>
                    <View style={[styles.cardContent, { backgroundColor: item.background }]}>
                        <View style={{ flexDirection: 'column', flex: 1, paddingLeft: 8 }}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.desc}>{item.desc}</Text>
                        </View>
                        <Image source={item.imageSource} style={styles.cardImage} />
                    </View>
                </Pressable>
            </View>
        );
    };
    if (loading) {
        return (
            <View style={styles.loaderContainer}>
                <AppMyloader />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 16,
    },
    item: {
        padding: 8,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        overflow: 'hidden',
        borderRadius: 12,

    },
    cardContent: {
        padding: 14,
        width: '96%',
        marginLeft: '2%',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
    cardImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    icon: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: 'gray',
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: 'rgba(55, 57, 54, 0.2)',
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 5,
        padding: 5,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    desc: {
        fontSize: 14,
        textAlign: 'left',
        paddingTop: 5
    },
    buttonContainer: {
        backgroundColor: COLORS.primary,
        width: 80,
        height: 30,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 5,
    },
    button: {
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 1,
        paddingLeft: 20,
    },
    appleButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.cardBackgroundCOlor,
        borderRadius: 30,
        height: 40,
        width: 40,
    },
});

export default AppWorkoutComponent;
