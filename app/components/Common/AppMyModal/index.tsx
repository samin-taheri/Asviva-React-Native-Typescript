import React from "react";
import { View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import AppListItem from "../AppListItem";
import Feather from "react-native-vector-icons/Feather";

interface MyModalProps {
    isVisible: boolean;
    onClose: () => void;
}
const AppMyModal: React.FC<MyModalProps> = ({ isVisible, onClose }) => {
    const toggleModal = () => {
        onClose();
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
                        <AppListItem iconName="file-text" style={{ fontSize: 16, paddingLeft: 10, paddingRight: '25%', textAlign: 'left' }} itemText="Questionnaire evaluation" />
                        <AppListItem iconName="battery-charging" style={{ fontSize: 16, paddingLeft: 10, paddingRight: '33%', textAlign: 'left' }} itemText="Physical fitness test" />
                        <AppListItem iconName="edit" style={{ fontSize: 16, paddingRight: '35%', paddingLeft: 10, textAlign: 'left' }} itemText="Manual fine-tuning" />
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
        top: 50,
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

export default AppMyModal;
