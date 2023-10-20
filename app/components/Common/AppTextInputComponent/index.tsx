import { COLORS } from '@/theme';
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Text from '../Text';
import AppButton from '../AppButton';
import Feather from 'react-native-vector-icons/Feather';

interface TextInputComponentProps {
    isVisible: boolean;
    onToggle: () => void;
    onSelectNickname: (selectedNickname: string) => void;
    onClose: () => void;
}

const AppTextInputComponent: React.FC<TextInputComponentProps> = ({
    isVisible,
    onToggle,
    onSelectNickname,
    onClose
}) => {
    const [inputText, setInputText] = useState<string>('');
    const [selectedNickname, setsSlectedNickname] = useState<string>('');

    const handleTextInputChange = (text: string) => {
        setInputText(text);
        setsSlectedNickname(selectedNickname);
    };

    const handleConfirm = () => {
        onSelectNickname(inputText);
        setInputText('');
        onToggle();
    };

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onToggle}
            backdropOpacity={0.5}
            style={styles.modal}
        >
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>enter_nickname</Text>
                <Feather
                    name="x"
                    size={24}
                    color="black"
                    style={styles.closeIcon}
                    onPress={onClose}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={handleTextInputChange}
                    value={inputText}
                    placeholder="Select Nickname"
                />
                <View style={{ marginBottom: 20 }}>
                    <AppButton mt-10 type="primary" onPress={() => onSelectNickname(inputText)} title="select" />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    closeIcon: {
        position: "absolute",
        top: 10,
        right: 15,
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 16,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 25
    },
    textInput: {
        width: '100%',
        borderWidth: 0.5,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 12
    },
    loginButton: {
        width: '100%',
        height: 45,
        backgroundColor: COLORS.primary,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: 'row',
        marginTop: 10
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default AppTextInputComponent;
