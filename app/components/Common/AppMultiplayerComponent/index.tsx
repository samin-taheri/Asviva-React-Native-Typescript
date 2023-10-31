import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ImageBackground, SafeAreaView, ImageSourcePropType, Pressable, ActivityIndicator } from 'react-native';
import AppMyloader from '../AppMyLoader';
import { COLORS } from '@/theme';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from '../Text';

interface DataItem {
    id: string;
    title: string;
    km: string;
    min: string;
    subtitle: string;
    date: string;
    isLive: boolean;
    imageSource: ImageSourcePropType;
}
interface MultiplayerComponentProps {
    onPress: (id: string) => void;
}
const AppMultiplayerComponent: React.FC<MultiplayerComponentProps> = ({ onPress }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<DataItem[]>([]);

    useEffect(() => {
        setTimeout(() => {
            const newData: DataItem[] = [
                { id: '1', isLive: true, km: '15.5 km', date: '10/15/23', min: '34 min', title: 'Monday Cycling', subtitle: 'San Francisco Bay Coyote Hills', imageSource: require('../../../assets/images/multiplayer-2.jpg') },
                { id: '2', isLive: false, km: '7 km', date: '10/15/23', min: '50 min', title: ' Tuesday Cycling', subtitle: 'Tail along Vitava', imageSource: require('../../../assets/images/multiplayer-3.jpg') },
                { id: '3', isLive: true, km: '4.4 km', date: '10/15/23', min: '43 min', title: 'Wednesday Cycling', subtitle: 'Run through bajanda', imageSource: require('../../../assets/images/multiplayer-6.jpg') },
                { id: '4', isLive: true, km: '17.4 km', date: '10/15/23', min: '60 min', title: 'thursday Cycling', subtitle: 'Otocec forest and park run', imageSource: require('../../../assets/images/multiplayer-4.jpg') },
                { id: '5', isLive: true, km: '6 km', date: '10/15/23', min: '42 min', title: 'Friday Cycling', subtitle: 'Lake of silvaplana', imageSource: require('../../../assets/images/multiplayer-5.jpg') },
                { id: '6', isLive: false, km: '6 km', date: '10/15/23', min: '42 min', title: 'Saturday Cycling', subtitle: 'Kayaking on the Rospuda river', imageSource: require('../../../assets/images/multiplayer-1.jpg') },
                { id: '7', isLive: true, km: '6 km', date: '10/15/23', min: '42 min', title: 'Sunday Cycling', subtitle: 'Dolomites Trail running', imageSource: require('../../../assets/images/multiplayer-7.jpg') },
            ];

            setData(newData);
            setLoading(false);
        }, 500);
    }, []);

    const renderItem = ({ item }: { item: DataItem }) => {
        return (
            <View style={styles.item}>
                <Pressable style={styles.cardContainer} onPress={() => onPress(item?.id)}>
                    <ImageBackground source={item.imageSource} style={styles.cardBackground}>
                        <View style={[styles.cardContent, { backgroundColor: 'rgba(255, 255, 255, 0.77)' }]}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.subtitle}>{item.subtitle}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <View style={[styles.iconContainer, { marginLeft: 10 }]}>
                                        <MaterialCommunityIcons
                                            name="account-supervisor"
                                            size={20}
                                            color={COLORS.gray}
                                        />
                                        <Text style={{ fontSize: 11 }}>{item.km}</Text>
                                    </View>
                                    <View style={[styles.iconContainer, { marginLeft: 30 }]}>
                                        <FontAwesome
                                            name="flash"
                                            size={15}
                                            color={COLORS.gray}
                                            style={{ paddingRight: 5 }}
                                        />
                                        <Text style={{ fontSize: 11 }}>{item.min}</Text>
                                    </View>
                                    <View style={[styles.iconContainer, { marginLeft: 30 }]}>
                                        <Ionicons
                                            name="bicycle"
                                            size={23}
                                            color={COLORS.gray}
                                        />
                                    </View>
                                    <View style={[styles.iconContainer, { marginLeft: 30 }]}>
                                        <Feather
                                            name="calendar"
                                            size={17}
                                            style={{ paddingRight: 5 }}
                                            color={COLORS.gray}
                                        />
                                        <Text style={{ fontSize: 11 }}>{item.date}</Text>
                                    </View>
                                </View>
                                {item.isLive ?
                                    <View style={styles.iconTopRightContainer}>
                                        <Text style={styles.subtitle2}>Live</Text>
                                    </View>
                                    : null}
                            </View>
                        </View>
                    </ImageBackground>
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
        marginLeft: 8,
        marginRight: 8,
        marginBottom: '20%'
    },
    iconTopRightContainer: {
        position: 'absolute',
        top: 0,
        padding: 7,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: 'rgba(53,124,66,0.3)',
        flexDirection: 'row',
        alignContent: 'center',
        flex: 1,
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '13%',
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
    cardBackground: {
        width: '100%',
        height: 170,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    cardContent: {
        padding: 14,
        width: '93%',
        marginLeft: '3.5%',
        marginTop: '10%',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: 'rgba(255,255,255,0.7)',
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 5,
        padding: 3,
        paddingLeft: 10,
        paddingRight: 10
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        paddingRight: 30,
        textAlign: 'left'
    },
    subtitle: {
        fontSize: 12,
        paddingRight: 30,
        textAlign: 'left',
        marginBottom: 2,
        marginTop: 2
    },
    subtitle2: {
        fontSize: 14,
        fontWeight: '600'
    },
    buttonContainer: {
        backgroundColor: COLORS.primary,
        width: 80,
        height: 30,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 5
    },
    button: {
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 1,
        paddingLeft: 20
    },
    appleButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.cardBackground,
        borderRadius: 30,
        height: 40,
        width: 40,
    },
});

export default AppMultiplayerComponent;
