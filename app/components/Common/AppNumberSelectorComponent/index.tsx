import { COLORS } from '@/theme';
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Text from '../Text';

interface TextInputComponentProps {
    isVisible: boolean;
    onToggle: () => void;
    onSelectNickname: (selectedNickname: string) => void;
}

const AppNumberSelectorComponent: React.FC<TextInputComponentProps> = ({
    isVisible,
    onToggle,
    onSelectNickname,
}) => {
    const [inputText, setInputText] = useState<string>('');
    const [selectedNickname, setsSlectedNickname] = useState<string>('');

    const handleTextInputChange = (text: string) => {
        setInputText(text);
        setsSlectedNickname(selectedNickname);
    }

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onToggle}
            backdropOpacity={0.5}
            style={styles.modal}
        >
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>select_a_number</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={handleTextInputChange}
                    value={inputText}
                    placeholder="Select a Number"
                    keyboardType='numeric'
                />
                <TouchableOpacity style={styles.loginButton} onPress={() => onSelectNickname(inputText)}>
                    <Text style={styles.buttonText}>select</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
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

export default AppNumberSelectorComponent;
