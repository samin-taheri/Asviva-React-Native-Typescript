import { View, StyleSheet, Text, ImageSourcePropType, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import React from "react";
import LinearGradient from 'react-native-linear-gradient';
import AppColoredCards2 from "../AppColoredCards2";
import AppCard from "../AppCard";
import AppGraphDetails from "../AppGraphDetails";
import AppBoxWithItems from "../AppBoxWithItems";
import { COLORS } from "@/theme";
import { HomeStackNavigationPropsType } from "@/navigation";
import AppButton from "../AppButton";
import Feather from "react-native-vector-icons/Feather";

interface DataItem {
    id: string;
    title1: string;
    title2: string;
    desc: string;
    intro: string;
    crowd1: string;
    crowd2: string;
    backgroundColor: string;
    color: string;
    imageSource: ImageSourcePropType;
}

const newData: DataItem[] = [
    { id: '1', backgroundColor: '#7e4f81', color: COLORS.workoutBackground1, crowd1: 'Have certain exercise habits', crowd2: 'Someone who is ready to build aphysical foundation.', intro: 'Thisexperience contains some basic ideas from typical endurance training. The comfortable, aerobic exercise intensity can help ypu achieve real fitness and make cycling more fun.', desc: 'Take your first step and master riding skills', title1: 'Beginner', title2: '15-minute Body Warm Up', imageSource: require('../../../assets/images/bg-5.jpg') },
    { id: '2', backgroundColor: '#534f81', color: COLORS.workoutBackground2, crowd1: 'Have certain exercise habits', crowd2: 'Someone who is ready to build aphysical foundation.', intro: 'Thisexperience contains some basic ideas from typical endurance training. The comfortable, aerobic exercise intensity can help ypu achieve real fitness and make cycling more fun.', desc: 'Burn more calories within limited time', title1: 'Fat burning', title2: '20-minute Basic Training', imageSource: require('../../../assets/images/bg-5.jpg') },
    { id: '3', backgroundColor: '#72814f', color: COLORS.workoutBackground3, crowd1: 'Have certain exercise habits', crowd2: 'Someone who is ready to build aphysical foundation.', intro: 'Thisexperience contains some basic ideas from typical endurance training. The comfortable, aerobic exercise intensity can help ypu achieve real fitness and make cycling more fun.', desc: 'Build better mental and physical ability', title1: 'Endurance', title2: '5-minute Basic Exercise for Starters', imageSource: require('../../../assets/images/bg-5.jpg') },
    { id: '4', backgroundColor: '#5a7c5f', color: COLORS.workoutBackground4, crowd1: 'Have certain exercise habits', crowd2: 'Someone who is ready to build aphysical foundation.', intro: 'Thisexperience contains some basic ideas from typical endurance training. The comfortable, aerobic exercise intensity can help ypu achieve real fitness and make cycling more fun.', desc: 'More explosive power and better muscle lnes', title1: 'Muscle Strength', title2: '10-minute Tempo Adaptation', imageSource: require('../../../assets/images/bg-5.jpg') },
    { id: '5', backgroundColor: '#7c765a', color: COLORS.workoutBackground5, crowd1: 'Have certain exercise habits', crowd2: 'Someone who is ready to build aphysical foundation.', intro: 'Thisexperience contains some basic ideas from typical endurance training. The comfortable, aerobic exercise intensity can help ypu achieve real fitness and make cycling more fun.', desc: 'More explosive power and better muscle lnes', title1: 'Muscle Strength', title2: '15-minute Energy Awakening', imageSource: require('../../../assets/images/bg-5.jpg') },
    { id: '6', backgroundColor: '#7c6b5a', color: COLORS.workoutBackground6, crowd1: 'Have certain exercise habits', crowd2: 'Someone who is ready to build aphysical foundation.', intro: 'Thisexperience contains some basic ideas from typical endurance training. The comfortable, aerobic exercise intensity can help ypu achieve real fitness and make cycling more fun.', desc: 'More explosive power and better muscle lnes', title1: 'Muscle Strength', title2: '20-minute Rhythm Control', imageSource: require('../../../assets/images/bg-5.jpg') },
    { id: '7', backgroundColor: '#81624f', color: COLORS.workoutBackground7, crowd1: 'Have certain exercise habits', crowd2: 'Someone who is ready to build aphysical foundation.', intro: 'Thisexperience contains some basic ideas from typical endurance training. The comfortable, aerobic exercise intensity can help ypu achieve real fitness and make cycling more fun.', desc: 'More explosive power and better muscle lnes', title1: 'Muscle Strength', title2: '20-minute Aerobic Interval Experience', imageSource: require('../../../assets/images/bg-5.jpg') },
    { id: '8', backgroundColor: '#814f6a', color: COLORS.workoutBackground8, crowd1: 'Have certain exercise habits', crowd2: 'Someone who is ready to build aphysical foundation.', intro: 'Thisexperience contains some basic ideas from typical endurance training. The comfortable, aerobic exercise intensity can help ypu achieve real fitness and make cycling more fun.', desc: 'More explosive power and better muscle lnes', title1: 'Muscle Strength', title2: '10-minute Daily Health', imageSource: require('../../../assets/images/bg-5.jpg') },
];

const AppWorkoutSubDetailComponent: React.FC = ({ }) => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    const route = useRoute();
    const { id } = route.params as { id: string };
    const selectedItem = newData.find(item => item.id === id);
    if (selectedItem) {
        const backgroundStyle = {
            backgroundColor: selectedItem.backgroundColor,
        };


        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={[selectedItem.backgroundColor, selectedItem.color, '#fff']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.linearGradient}
                >
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Feather name="arrow-left" size={30} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.title}>{selectedItem.title2}</Text>
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
                        <View style={{ padding: 8 }}>
                            <AppCard>
                                <View style={styles.textContainer}>
                                    <View style={styles.iconContainer}>
                                        <Text style={styles.introTitle}>Course Intro</Text>
                                    </View>
                                    <Text style={styles.title2}>{selectedItem.intro}</Text>
                                </View>
                            </AppCard>
                            <AppCard>
                                <View style={styles.textContainer}>
                                    <View style={styles.iconContainer}>
                                        <Text style={styles.introTitle}>Crowd</Text>
                                    </View>
                                    <Text style={styles.title2}>‣ {selectedItem.crowd1}</Text>
                                    <Text style={styles.title2}>‣ {selectedItem.crowd2}</Text>
                                </View>
                            </AppCard>
                        </View>
                        <AppGraphDetails title={'Course Info'} width={320} height={170} barPercentage={0.5} color={selectedItem.backgroundColor} />
                        <AppBoxWithItems />
                    </ScrollView>
                </LinearGradient>
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
    linearGradient: {
        width: '100%',
        height: '100%',
        opacity: 0.95,
    },
    backButton: {
        position: 'absolute',
        top: '4%',
        left: '2%',
        zIndex: 1,
        padding: 16,
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    cardContent: {
        padding: 10,
        width: '93%',
        marginLeft: '3.5%',
        marginTop: '37%',
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
        color: 'white',
        marginTop: '25%',
        marginLeft: 10
    },
    introTitle: {
        fontSize: 14,
        fontWeight: "bold",
        padding: 10,
        textAlign: 'left',
    },
    title2: {
        fontSize: 14,
        paddingLeft: 10,
        textAlign: 'left',
        marginTop: 10
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


export default AppWorkoutSubDetailComponent;

