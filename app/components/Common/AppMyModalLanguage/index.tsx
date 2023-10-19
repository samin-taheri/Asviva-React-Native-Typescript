import React from "react";
import { View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import Feather from "react-native-vector-icons/Feather";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { settingsRedux } from "@/store";
import AppButton from "../AppButton";
import Text from "../Text";

interface MyModalProps {
    isVisible: boolean;
    onClose: () => void;
}
const HeaderRight = ({ language }: { language: string }) => (
    <View style={{ padding: 10, paddingBottom: 30, flexDirection: 'row' }}>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>language</Text>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>: {language}</Text>
    </View>
);

const AppMyModalLanguage: React.FC<MyModalProps> = ({ isVisible, onClose }) => {
    const dispatch = useAppDispatch();

    const toggleModal = () => {
        onClose();
    };
    const language = useAppSelector(state => state.settings.language);

    const onChangeLang = (_language: string) => {
        dispatch(settingsRedux.changeLanguage(_language));
    };

    return (
        <Modal isVisible={isVisible} style={{ justifyContent: "flex-end", margin: 0 }} onBackdropPress={toggleModal}>
            <View style={{ backgroundColor: "white", padding: 16 }}>
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
                        <AppButton type="primary" title={'Deutch'} onPress={() => onChangeLang('de')} mb-10 />
                        <AppButton type="primary" title={'English'} onPress={() => onChangeLang('en')} />
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
        height: "30%",
        borderRadius: 10,
        alignItems: "center",
    },
    container2: {
        top: 0,
        width: '100%'
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
function dispatch(arg0: any) {
    throw new Error("Function not implemented.");
}

