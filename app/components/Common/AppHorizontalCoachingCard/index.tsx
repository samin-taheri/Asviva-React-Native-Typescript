import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AppLable from "../AppLable";
import AppCouchingCard from "../AppCoachingCard";

const cardData = [
    { id: '1', user: '19 min', kcal: '91 kcal', title: 'Hit Whole Body Fat Burning', imageSource: require('../../../assets/images/couching-1.jpg') },
    { id: '2', user: '37 min', kcal: '235 kcal', title: 'Fat Burning Cardio Workout New', imageSource: require('../../../assets/images/couching-3.jpg') },
    { id: '3', user: '24 min', kcal: '134 kcal', title: 'Sweat Fat Burning', imageSource: require('../../../assets/images/couching-5.jpg') },
    { id: '4', user: '17 min', kcal: '89 kcal', title: 'HIT Training New', imageSource: require('../../../assets/images/couching-6.jpg') },
    { id: '5', user: '30 min', kcal: '170 kcal', title: 'Rhythmic Fat Riding', imageSource: require('../../../assets/images/couching-4.jpg') },
    { id: '6', user: '22 min', kcal: '132 kcal', title: 'Cardşopulmonary Strength Training ', imageSource: require('../../../assets/images/couching-8.jpg') },
    { id: '7', user: '29 min', kcal: '185 kcal', title: 'Comprehensive Fat Burning', imageSource: require('../../../assets/images/couching-9.jpg') },
    { id: '8', user: '27 min', kcal: '186 kcal', title: 'Strength Training New', imageSource: require('../../../assets/images/couching-10.jpg') },
    { id: '9', user: '25 min', kcal: '129 kcal', title: 'Speed & Endurance Training', imageSource: require('../../../assets/images/couching-11.jpg') },
    { id: '10', user: '22 min', kcal: '138 kcal', title: 'Endurance Training New', imageSource: require('../../../assets/images/couching-3.jpg') },
];
interface CochingCardProps {
    onPress: (id: string) => void;
}

const AppHorizontalCoachingCard: React.FC<CochingCardProps> = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <AppLable title="Coaching Course" />
            <FlatList
                data={cardData}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <AppCouchingCard
                        imageSource={item.imageSource}
                        title={item.title}
                        user={item.user}
                        kcal={item.kcal}
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

export default AppHorizontalCoachingCard;
