import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AppLable from "../AppLable";
import AppMultiplayerCard from "../AppMultiplayerCard";

const cardData = [
    { id: '1', isLive: true, km: '15.5 km', date: '10/15/23', min: '34 min', title: 'Monday Cycling', subtitle: 'San Francisco Bay Coyote Hills', imageSource: require('../../../assets/images/multiplayer-2.jpg') },
    { id: '2', isLive: false, km: '7 km', date: '10/15/23', min: '50 min', title: ' Tuesday Cycling', subtitle: 'Tail along Vitava', imageSource: require('../../../assets/images/multiplayer-3.jpg') },
    { id: '3', isLive: true, km: '4.4 km', date: '10/15/23', min: '43 min', title: 'Wednesday Cycling', subtitle: 'Run through bajanda', imageSource: require('../../../assets/images/multiplayer-6.jpg') },
    { id: '4', isLive: true, km: '17.4 km', date: '10/15/23', min: '60 min', title: 'thursday Cycling', subtitle: 'Otocec forest and park run', imageSource: require('../../../assets/images/multiplayer-4.jpg') },
    { id: '5', isLive: true, km: '6 km', date: '10/15/23', min: '42 min', title: 'Friday Cycling', subtitle: 'Lake of silvaplana', imageSource: require('../../../assets/images/multiplayer-5.jpg') },
    { id: '6', isLive: false, km: '6 km', date: '10/15/23', min: '42 min', title: 'Saturday Cycling', subtitle: 'Kayaking on the Rospuda river', imageSource: require('../../../assets/images/multiplayer-1.jpg') },
    { id: '7', isLive: true, km: '6 km', date: '10/15/23', min: '42 min', title: 'Sunday Cycling', subtitle: 'Dolomites Trail running', imageSource: require('../../../assets/images/multiplayer-7.jpg') },
];

interface CochingCardProps {
    onPress: (id: string) => void;
}
const AppHorizontalMultiplayerCard: React.FC<CochingCardProps> = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <AppLable title="Multiplayer" />
            <FlatList
                data={cardData}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <AppMultiplayerCard
                        imageSource={item.imageSource}
                        title={item.title}
                        isLive={item.isLive}
                        km={item.km}
                        date={item.date}
                        min={item.min}
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

export default AppHorizontalMultiplayerCard;
