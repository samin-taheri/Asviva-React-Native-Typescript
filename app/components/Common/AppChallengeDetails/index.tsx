import { View, StyleSheet, Text, ImageSourcePropType, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { useRoute } from '@react-navigation/native';
import React from "react";
import AppColoredCards2 from "../AppColoredCards2";
import AppCard from "../AppCard";
import { COLORS } from "@/theme";
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType, Routes } from '@/navigation';
import AppProgressBar from "../AppProgressBar";
import AppGraphDetails from "../AppGraphDetails";

interface DataItem {
    id: string;
    title: string;
    user: string;
    intro: string;
    imageSource: ImageSourcePropType;
}

const newData: DataItem[] = [
    { id: '1', user: '0', title: 'Otar River (Norway)', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-13.jpg') },
    { id: '2', user: '0', title: '(Austria) Alpine garden', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-6.jpg') },
    { id: '3', user: '0', title: 'The Alps', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-17.jpg') },
    { id: '4', user: '0', title: 'Sightseeing road (Norway)', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-1.jpg') },
    { id: '5', user: '1', title: '(Xiamen) Skybike path', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-3.jpg') },
    { id: '6', user: '0', title: '(Three dimensional) space', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-7.jpg') },
    { id: '7', user: '0', title: '(3D) Pink Blue tunnel', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-8.jpg') },
    { id: '8', user: '0', title: '(3D) Love tunnel', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-10.jpg') },
    { id: '9', user: '0', title: '(3D) Purple and Yellow tunnel', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-11.jpg') },
    { id: '10', user: '0', title: '(Three dimensional) time', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-12.jpg') },
];

const AppChallengeDetails: React.FC = ({ }) => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    const route = useRoute();
    const { id } = route.params as { id: string };
    const selectedItem = newData.find(item => item.id === id);

    if (selectedItem) {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                </TouchableOpacity>
                <View style={styles.imageContainer}>
                    <ImageBackground source={selectedItem.imageSource} style={styles.image}>
                        <View style={[styles.cardContent, { backgroundColor: 'rgba(255, 255, 255, 0.77)' }]}>
                            <Text style={styles.title}>{selectedItem.title}</Text>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.container2}>
                                <AppColoredCards2
                                    color='#3d3d4e'
                                    title="Distance"
                                    description="10.35"
                                    cardColor='rgba(255, 233, 225, 0.8)'
                                    imageSource={require('../../../assets/images/distance.png')}
                                />
                                <AppColoredCards2
                                    color='#3d3d4e'
                                    title="Climb"
                                    description="0.1 m"
                                    cardColor='rgba(240, 215, 237, 0.8)'
                                    imageSource={require('../../../assets/images/climb.png')}
                                />
                                <AppColoredCards2
                                    color='#3d3d4e'
                                    title="Difficulty"
                                    description="1 star"
                                    cardColor='rgba(234, 239, 232, 0.8)'
                                    imageSource={require('../../../assets/images/difficulty.png')}
                                />
                            </View>
                            <AppProgressBar />
                            <View style={{ padding: 8 }}>
                                <AppCard>
                                    <View style={styles.textContainer}>
                                        <View style={styles.iconContainer}>
                                            <Text style={styles.introTitle}>Route Intro</Text>
                                        </View>
                                        <Text style={styles.title2}>{selectedItem.intro}</Text>
                                    </View>
                                </AppCard>
                            </View>
                            <View style={{ marginBottom: 20 }}>
                                <AppGraphDetails title={'Course Info'} width={320} height={170} barPercentage={0.5} color={COLORS.gray} />
                            </View>
                        </ScrollView>
                    </ImageBackground>
                </View>
            </View>
        )
    }
    return null;
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    cardContent: {
        padding: 10,
        width: '93%',
        marginLeft: '3.5%',
        marginTop: '26%',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        padding: 10,
        textAlign: 'left',
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
        backgroundColor: COLORS.backgroundColor,
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 5,
        padding: 0,
        width: 120,
    },
});
export default AppChallengeDetails;



