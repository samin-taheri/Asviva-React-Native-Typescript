import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

interface Option {
    id: string;
    label: string;
}
interface MyModalProps {
    isVisible: boolean;
    onClose: () => void;
    title: string;
    selectedOption: string | null;
    onSelect: (option: string) => void;
}

const AppBottomSelectorModal: React.FC<MyModalProps> = ({ isVisible, onClose, title, selectedOption, onSelect }) => {
    const toggleModal = () => {
        onClose();
    };
    const data: Option[] = [
        { id: "1", label: "Female" },
        { id: "2", label: "Male" },
    ];

    const renderItem = ({ item }: { item: Option }) => (
        <TouchableOpacity
            style={[
                styles.option,
                item.label === selectedOption ? styles.selectedOption : null,
            ]}
            onPress={() => {
                onSelect(item.label);
                onClose();
            }}
        >
            <Text style={styles.optionText}>{item.label}</Text>
        </TouchableOpacity>
    );

    return (
        <Modal isVisible={isVisible} style={{ justifyContent: "flex-end", margin: 0 }} onBackdropPress={toggleModal}>
            <View style={{ backgroundColor: "white", padding: 16 }}>

                <Text style={styles.title}>{title}</Text>
                <View style={styles.modalContent2}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
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
        height: "50%",
        borderRadius: 10,
        alignItems: "center",
    },
    container2: {
        paddingTop: 20,
        width: '100%'
    },
    selectedOption: {
        backgroundColor: 'white'
    },
    modalContent2: {
        bottom: 0,
        width: "100%",
        backgroundColor: "#fff",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    option: {
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: "#ccc",
    },
    optionText: {
        fontSize: 15,
    },
    closeIcon: {
        position: "absolute",
        top: 10,
        right: 15,
    },
    title: {
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 15
    }
});

export default AppBottomSelectorModal;
