import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppCustomHeader from "../AppCustomHeader";
import AppProfileCard from "../AppProfileCard";
import AppBottomSelectorModal from "../AppBottomSelectorModal";
import AppTextInputComponent from "../AppTextInputComponent";
import AppNumberSelectorComponent from "../AppNumberSelectorComponent";
import { COLORS } from "@/theme";
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType, Routes } from '@/navigation';

const AppProfile: React.FC = ({ }) => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible2, setIsModalVisibl2] = useState(false);
    const [isModalVisible3, setIsModalVisibl3] = useState(false);
    const [isModalVisible4, setIsModalVisibl4] = useState(false);
    const [isModalVisible5, setIsModalVisibl5] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [selectedNickname, setselectedNickname] = useState<string | null>(null);
    const [selectedBirthday, setselectedBirthday] = useState<string | null>(null);
    const [selectedWeight, setselectedWeight] = useState<string | null>(null);
    const [selectedHeight, setselectedHeight] = useState<string | null>(null);

    const handleGenderSelect = (option: string) => {
        setSelectedOption(option);
        toggleModal();
    };

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const toggleModal2 = () => {
        setIsModalVisibl2(!isModalVisible2);
    };

    const handleNicknameSelect = (string: string | null) => {
        setselectedNickname(string);
        toggleModal2();
    };
    const toggleModal3 = () => {
        setIsModalVisibl3(!isModalVisible3);
    };

    const handleBirthday = (string: string | null) => {
        setselectedBirthday(string);
        toggleModal3();
    };

    const toggleModal4 = () => {
        setIsModalVisibl4(!isModalVisible4);
    };

    const handleWeight = (string: string | null) => {
        setselectedWeight(string);
        toggleModal4();
    };

    const toggleModal5 = () => {
        setIsModalVisibl5(!isModalVisible5);
    };

    const handleHeight = (string: string | null) => {
        setselectedHeight(string);
        toggleModal5();
    };

    return (
        <View style={styles.container}>
            <AppCustomHeader title="profile" onBack={() => navigation.goBack()} navigation={navigation} onLogo={false} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    <AppProfileCard
                        title="change_avatar"
                        iconName="account-convert"
                        selectedOption="please_select"
                        imageSource={require('../../../assets/images/profile-19.png')}
                        onPress={() => { }}
                    />
                    <AppProfileCard
                        title="nickname"
                        iconName="account-tie"
                        selectedOption={selectedNickname !== null ? `selected: ${selectedNickname}` : "please_select"}
                        imageSource={require('../../../assets/images/profile-13.png')}
                        onPress={toggleModal2}
                    />
                    <View style={styles.line} />
                    <AppProfileCard
                        title="country_region"
                        iconName="earth"
                        selectedOption="please_select"
                        imageSource={require('../../../assets/images/profile-3.png')}
                        onPress={() => {
                        }}
                    />
                    <View style={styles.line} />
                    <AppProfileCard
                        title="gender"
                        iconName="gender-male-female"
                        imageSource={require('../../../assets/images/profile-11.png')}
                        selectedOption={selectedOption || "please_select"}
                        onPress={toggleModal}
                    />
                    <AppProfileCard
                        title="height"
                        iconName="human-male-height"
                        imageSource={require('../../../assets/images/profile-5.png')}
                        onPress={toggleModal5}
                        selectedOption={selectedHeight !== null ? `selected: ${selectedHeight}` : "please_select"}
                    />
                    <AppProfileCard
                        title="weight"
                        iconName="weight"
                        imageSource={require('../../../assets/images/profile-20.png')}
                        onPress={toggleModal4}
                        selectedOption={selectedWeight !== null ? `selected: ${selectedWeight}` : "please_select"}
                    />
                    <AppProfileCard
                        title="birthday"
                        iconName="cake-variant"
                        imageSource={require('../../../assets/images/profile-9.png')}
                        onPress={toggleModal3}
                        selectedOption={selectedBirthday !== null ? `selected: ${selectedBirthday}` : "please_select"}
                    />
                    <AppBottomSelectorModal selectedOption={selectedOption} onSelect={handleGenderSelect} title="select_gender" isVisible={isModalVisible} onClose={toggleModal} />
                    <AppTextInputComponent
                        isVisible={isModalVisible2}
                        onToggle={toggleModal2}
                        onSelectNickname={handleNicknameSelect}
                    />
                    <AppNumberSelectorComponent
                        isVisible={isModalVisible3}
                        onToggle={toggleModal3}
                        onSelectNickname={handleBirthday}
                    />
                    <AppNumberSelectorComponent
                        isVisible={isModalVisible4}
                        onToggle={toggleModal4}
                        onSelectNickname={handleWeight}
                    />
                    <AppNumberSelectorComponent
                        isVisible={isModalVisible5}
                        onToggle={toggleModal5}
                        onSelectNickname={handleHeight}
                    />
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundColor
    },
    contentContainer: {
        flex: 1,
        padding: 8,
        paddingTop: 20
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'left',
        padding: 12,
        paddingRight: '12%',
        color: 'black',
    },
    line: {
        width: '92%',
        height: 1,
        backgroundColor: '#e5e5e5',
        margin: 15,
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    datePickerContainer: {
        backgroundColor: 'white',
        padding: 16,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    selectedDateText: {
        marginTop: 16,
        fontSize: 18,
    },
});

export default AppProfile;