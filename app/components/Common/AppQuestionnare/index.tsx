import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import AppCustomHeader from '../AppCustomHeader';
import { COLORS } from '@/theme';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType, Routes } from '@/navigation';
import Text from '../Text';

interface Question {
    text: string;
    options: string[];
}

const questions: Question[] = [
    {
        text: 'What is your exercise goal?',
        options: ['Stay healthy and energetic', 'Slimming', 'Get fit for an upcoming competition'],
    },
    {
        text: 'How has your exercise status been in the past six months?',
        options: ['I dont really like exercising', 'I exercise occasionally', 'I have a habit of exercising and I exercise every week'],
    },
    {
        text: 'How is your exercise performance?',
        options: ['I dont move unless I have to', 'I walk occasionally, but rarely break a sweat'],
    },
];

interface AppQuestionnaireProps {
    onPress: () => void;
}

const AppQuestionnare: React.FC<AppQuestionnaireProps> = ({ onPress }) => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1 && selectedOption !== null) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setSelectedOption(null);
        }
    };

    const isNextButtonVisible = currentQuestion < questions.length - 1 && selectedOption !== null;
    const isSubmitButtonVisible = selectedOption !== null;
    const isPreviousButtonDisabled = currentQuestion === 0;
    const isLastQuestion = currentQuestion === questions.length - 1;

    return (
        <View style={styles.container}>
            <AppCustomHeader title="questionnaire" onBack={() => navigation.goBack()} navigation={navigation} onLogo={false} />
            <View style={styles.container2}>
                <Text style={styles.questionText}>{questions[currentQuestion].text}</Text>
                {questions[currentQuestion].options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.optionButton,
                            { backgroundColor: selectedOption === option ? '#e1bdbc' : COLORS.backgroundColor },
                        ]}
                        onPress={() => handleOptionSelect(option)}
                    >
                        <Text style={styles.optionText}>{option}</Text>
                    </TouchableOpacity>
                ))}
                <View style={styles.progressContainer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.loginButton, isPreviousButtonDisabled && styles.invisibleButton]}
                            onPress={handlePreviousQuestion}
                            disabled={isPreviousButtonDisabled}
                        >
                            <Text style={styles.buttonText}>Previous</Text>
                        </TouchableOpacity>
                        {isNextButtonVisible ? (
                            <TouchableOpacity
                                style={[
                                    styles.loginButton,
                                    !isNextButtonVisible && { backgroundColor: '#bebebe' },
                                    isLastQuestion && isSubmitButtonVisible && styles.redButton,
                                ]}
                                onPress={handleNextQuestion}
                                disabled={!isNextButtonVisible}
                            >
                                <Text style={styles.buttonText}>
                                    {currentQuestion < questions.length - 1 ? 'Next' : 'Submit'}
                                </Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                style={[
                                    styles.loginButton,
                                    !isNextButtonVisible && { backgroundColor: '#bebebe' },
                                    isLastQuestion && isSubmitButtonVisible && styles.redButton,
                                ]}
                                onPress={onPress}
                                disabled={!isSubmitButtonVisible}
                            >
                                <Text style={styles.buttonText}>{currentQuestion < questions.length - 1 ? 'Next' : 'Submit'}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
                <View style={styles.progressTextContainer}>
                    <Text style={styles.progressText}>{`${currentQuestion + 1}/${questions.length}`}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        width: '48%',
        height: 45,
        backgroundColor: COLORS.primary,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    questionText: {
        fontSize: 20,
        marginBottom: 30,
        textAlign: 'center',
        fontWeight: '600',
        padding: 10
    },
    optionButton: {
        width: '90%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 12,
        padding: 10,
    },
    optionText: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
    },
    progressContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    progressTextContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 30,
        alignItems: 'center',
    },
    progressText: {
        fontSize: 14,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        marginTop: 10,
    },
    invisibleButton: {
        width: '48%',
        height: 45,
        backgroundColor: '#bebebe',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    redButton: {
        backgroundColor: COLORS.primary,
    },
    disabledButton: {
        backgroundColor: 'gray',
    },
});

export default AppQuestionnare;