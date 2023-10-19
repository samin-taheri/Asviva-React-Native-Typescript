import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AppLable from "../AppLable";
import AppChallengeCard from "../AppChallengeCard";

const cardData = [
    { id: '1', user: '0', loc: '5.58 km', title: 'Otar River (Norway)', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-13.jpg') },
    { id: '2', user: '0', loc: '5.58 km', title: '(Austria) Alpine garden', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-6.jpg') },
    { id: '3', user: '0', loc: '5.58 km', title: 'The Alps', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-17.jpg') },
    { id: '4', user: '0', loc: '5.58 km', title: 'Sightseeing road (Norway)', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-1.jpg') },
    { id: '5', user: '1', loc: '5.58 km', title: '(Xiamen) Skybike path', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-3.jpg') },
    { id: '6', user: '0', loc: '5.58 km', title: '(Three dimensional) space', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-7.jpg') },
    { id: '7', user: '0', loc: '5.58 km', title: '(3D) Pink Blue tunnel', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-8.jpg') },
    { id: '8', user: '0', loc: '5.58 km', title: '(3D) Love tunnel', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-10.jpg') },
    { id: '9', user: '0', loc: '5.58 km', title: '(3D) Purple and Yellow tunnel', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-11.jpg') },
    { id: '10', user: '0', loc: '5.58 km', title: '(Three dimensional) time', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-12.jpg') },
];

interface CochingCardProps {
    onPress: (id: string) => void;
}
const AppHorizontalChallengeCard: React.FC<CochingCardProps> = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <AppLable title="challenge" />
            <FlatList
                data={cardData}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <AppChallengeCard
                        imageSource={item.imageSource}
                        title={item.title}
                        user={item.user}
                        loc={item.loc}
                        id={item.id}
                        onPress={() => onPress(item.id)}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default AppHorizontalChallengeCard;
