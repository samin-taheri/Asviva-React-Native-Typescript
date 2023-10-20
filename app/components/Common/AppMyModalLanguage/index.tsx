import React, { useState, useEffect } from "react";
import { View, StyleSheet, Switch, Pressable } from "react-native";
import Modal from "react-native-modal";
import Feather from "react-native-vector-icons/Feather";
import { useAppDispatch, useAppSelector, useDialog } from "@/hooks";
import { settingsRedux } from "@/store";
import AppButton from "../AppButton";
import Text from "../Text";
import { COLORS } from "@/theme";

interface MyModalProps {
    isVisible: boolean;
    onClose: () => void;
}
const HeaderRight = ({ language }: { language: string }) => (
    <View style={{ padding: 0, paddingBottom: 0, flexDirection: 'row' }}>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>language</Text>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>: {language}</Text>
    </View>
);

const AppMyModalLanguage: React.FC<MyModalProps> = ({ isVisible, onClose }) => {
    const dispatch = useAppDispatch();
    const [isEnabled, setIsEnabled] = useState(false);

    // Define the language values
    const languages = {
        de: 'Deutsch',
        en: 'English',
    };

    const toggleSwitch = () => {
        // Toggle the isEnabled state
        setIsEnabled((prev) => !prev);
    };

    const toggleModal = () => {
        onClose();
    };

    const language = useAppSelector((state) => state.settings.language);

    useEffect(() => {
        // When isEnabled changes, update the language
        if (isEnabled) {
            dispatch(settingsRedux.changeLanguage('de'));
        } else {
            dispatch(settingsRedux.changeLanguage('en'));
        }
    }, [isEnabled, dispatch]);

    return (
        <Modal isVisible={isVisible} style={{ justifyContent: "flex-end", margin: 0 }} onBackdropPress={toggleModal}>
            <View style={{ backgroundColor: "white", padding: 10 }}>
                <View style={styles.modalContent}>
                    <Feather
                        name="x"
                        size={24}
                        color="black"
                        style={styles.closeIcon}
                        onPress={onClose}
                    />
                    <View style={styles.container2}>
                        <HeaderRight language={language} />
                        <Switch
                            trackColor={{ false: "#D6D6D6", true: COLORS.primary }}
                            thumbColor={isEnabled ? "#fff" : "#fff"}
                            ios_backgroundColor="#D6D6D6"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={{ marginLeft: 'auto' }}
                        />
                        {/* <AppButton type="primary" title={'Deutsch'} onPress={toggleSwitch} mb-10 />
                        <AppButton type="primary" title={'English'} onPress={toggleSwitch} /> */}
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: "white",
        padding: 16,
        width: "100%",
        height: "20%",
        borderRadius: 10,
        alignItems: "center",
    },
    container2: {
        width: '100%',
        flexDirection: 'row',
        top: '15%'
    },
    closeIcon: {
        position: "absolute",
        top: 10,
        right: 15,
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 15
    }
});

export default AppMyModalLanguage;
