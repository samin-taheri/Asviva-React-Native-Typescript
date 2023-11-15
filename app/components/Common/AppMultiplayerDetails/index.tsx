import { View, StyleSheet, ImageSourcePropType, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import React from "react";
import { HomeStackNavigationPropsType } from "@/navigation";
import AppColoredCards2 from "../AppColoredCards2";
import { COLORS } from "@/theme";
import AppGraphDetails from "../AppGraphDetails";
import AppBoxWithItems from "../AppBoxWithItems";
import AppButton from "../AppButton";
import Feather from "react-native-vector-icons/Feather";
import Text from "../Text";

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

const data: DataItem[] = [
    { id: '1', isLive: true, km: '15.5 km', date: '10/15/23', min: '34 min', title: 'Monday Cycling', subtitle: 'San Francisco Bay Coyote Hills', imageSource: require('../../../assets/images/multiplayer-2.jpg') },
    { id: '2', isLive: false, km: '7 km', date: '10/15/23', min: '50 min', title: ' Tuesday Cycling', subtitle: 'Tail along Vitava', imageSource: require('../../../assets/images/multiplayer-3.jpg') },
    { id: '3', isLive: true, km: '4.4 km', date: '10/15/23', min: '43 min', title: 'Wednesday Cycling', subtitle: 'Run through bajanda', imageSource: require('../../../assets/images/multiplayer-6.jpg') },
    { id: '4', isLive: true, km: '17.4 km', date: '10/15/23', min: '60 min', title: 'thursday Cycling', subtitle: 'Otocec forest and park run', imageSource: require('../../../assets/images/multiplayer-4.jpg') },
    { id: '5', isLive: true, km: '6 km', date: '10/15/23', min: '42 min', title: 'Friday Cycling', subtitle: 'Lake of silvaplana', imageSource: require('../../../assets/images/multiplayer-5.jpg') },
    { id: '6', isLive: false, km: '6 km', date: '10/15/23', min: '42 min', title: 'Saturday Cycling', subtitle: 'Kayaking on the Rospuda river', imageSource: require('../../../assets/images/multiplayer-1.jpg') },
    { id: '7', isLive: true, km: '6 km', date: '10/15/23', min: '42 min', title: 'Sunday Cycling', subtitle: 'Dolomites Trail running', imageSource: require('../../../assets/images/multiplayer-7.jpg') },
];

const AppMultiplayerDetails: React.FC = ({ }) => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    const route = useRoute();
    const { id } = route.params as { id: string };
    const selectedItem = data.find(item => item.id === id);
    if (selectedItem) {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <ImageBackground source={selectedItem.imageSource} style={styles.image}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                            <Feather name="arrow-left" size={30} color="#fff" />
                        </TouchableOpacity>
                        <View style={[styles.cardContent, { backgroundColor: 'rgba(255, 255, 255, 0.77)' }]}>
                            <Text style={styles.title}>{selectedItem.title}</Text>
                            <Text style={styles.subtitle}>{selectedItem.subtitle}</Text>
                        </View>
                    </ImageBackground>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container2}>
                        <AppColoredCards2
                            color='#3d3d4e'
                            title="Time"
                            description="19.00"
                            cardColor='rgba(255, 233, 225, 0.8)'
                            imageSource={require('../../../assets/images/clock-2.png')}
                        />
                        <AppColoredCards2
                            color='#3d3d4e'
                            title="Energy"
                            description="91 kcal"
                            cardColor='rgba(240, 215, 237, 0.5)'
                            imageSource={require('../../../assets/images/energy.png')}
                        />
                        <AppColoredCards2
                            color='#3d3d4e'
                            title="Difficulty"
                            description="3 star"
                            cardColor='rgba(234, 239, 232, 0.8)'
                            imageSource={require('../../../assets/images/difficulty.png')}
                        />
                    </View>
                    <View style={styles.container3}>
                        <AppColoredCards2
                            color='#3d3d4e'
                            title="Distance"
                            description="4.4 km"
                            cardColor='rgba(204, 204, 229, 0.5)'
                            imageSource={require('../../../assets/images/distance-1.png')}
                        />
                        <AppColoredCards2
                            color='#3d3d4e'
                            title="Durance"
                            description="34 min"
                            cardColor='rgba(228, 231, 202, 0.5)'
                            imageSource={require('../../../assets/images/durance.png')}
                        />
                        <AppColoredCards2
                            color='#3d3d4e'
                            title="Speed"
                            description="7.6 kph"
                            cardColor='rgba(233, 195, 195, 0.5)'
                            imageSource={require('../../../assets/images/speed.png')}
                        />
                    </View>
                    <AppGraphDetails title={'Elevation'} width={320} height={170} barPercentage={0.5} color={COLORS.gray} />
                    <AppBoxWithItems />
                </ScrollView>
            </View>
        )
    }
    return null;
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
    },
    textContainer: {
        flex: 1,
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        marginTop: 10
    },
    container3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        marginTop: -20
    },
    subtitle: {
        fontSize: 15,
        textAlign: 'left',
        padding: 5,
        paddingLeft: 15
    },
    backButton: {
        position: 'absolute',
        top: '5%',
        left: '2%',
        zIndex: 1,
        padding: 16,
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    cardContent: {
        padding: 10,
        width: '93%',
        marginLeft: '3.5%',
        marginTop: 130,
        borderRadius: 12,
        flexDirection: 'column',
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        padding: 5,
        textAlign: 'left',
        paddingLeft: 15
    },
    introTitle: {
        fontSize: 14,
        fontWeight: "bold",
        padding: 10,
        textAlign: 'left',
    },
    title2: {
        fontSize: 14,
        padding: 10,
        textAlign: 'left',
        paddingTop: 10
    },
    cardContainer: {
        overflow: 'hidden',
        borderRadius: 12,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: COLORS.cardBackground,
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 5,
        padding: 0,
        width: 120,
    },
});


export default AppMultiplayerDetails;

