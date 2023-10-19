import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { COLORS } from '@/theme';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { AppButton, Form, fields } from '@/components';
import AppMyHeader from '../AppMyHeader';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType, Routes } from '@/navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const initial = {
    username: '',
    password: '',
};

interface LoginProps {
    onLogin: (username: string, password: string) => void;
    onRegister: () => void;
    navigate: () => void;
    forgotPassword: () => void;
    signUp: () => void;
    NavigateHome: () => void;
}

const AppLogin: React.FC<LoginProps> = ({ onLogin, onRegister, navigate, forgotPassword, signUp, NavigateHome }) => {

    const [rememberMe, setRememberMe] = useState(false);

    const schema = Yup.object({
        username: fields.text.label('Username').required('Bu alan zorunludur'),
        password: fields.password.label('Password').min(6, 'En az 6 karakter olmalı').required('Lütfen parola giriniz'),
    });
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    const form = useForm({
        defaultValues: initial,
        resolver: yupResolver(schema),
    });

    const onSubmit = (values: typeof initial) => {
        console.log(values);
    };

    return (
        <View>
            <AppMyHeader showLogoWithoutBack>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text style={styles.title}>Login</Text>
                    </View>
                    <Pressable style={{ borderRadius: 8, backgroundColor: COLORS.white, padding: 8, flexDirection: 'row', height: 33, alignItems: 'center' }} onPress={NavigateHome}>
                        <Text style={{ fontSize: 13 }}>Guest Mode</Text>
                    </Pressable>
                </View>
                <Form schema={schema} form={form} />
                <View style={styles.rememberMeContainer}>
                    <Pressable onPress={forgotPassword}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </Pressable>
                </View>
                <AppButton mt-10 type="primary" onPress={form.handleSubmit(onSubmit)} title="Sign In" />
                <AppButton mt-10 type="secondary" onPress={() => navigation.navigate(Routes.SIGNUP_SCREEN)} title="Sign Up" />
                <View style={styles.container3}>
                    <View style={styles.divider} />
                    <Text style={styles.text}>Sign in with</Text>
                    <View style={styles.divider} />
                </View>
                <View style={styles.container2}>
                    <TouchableOpacity style={styles.googleButton}>
                        <FontAwesome name="google" size={30} color={COLORS.primary} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.appleButton} >
                        <FontAwesome name="apple" size={30} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>
            </AppMyHeader>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 20,
        paddingLeft: 5
    },
    action: {
        flexDirection: 'row',
    },
    image: {
        width: 160,
        height: 160,
        resizeMode: 'cover',
        borderRadius: 12,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        paddingLeft: 10,
        marginBottom: 15,
        backgroundColor: COLORS.backgroundColor
    },
    buttonContainer: {
        flexDirection: 'row',
        flex: 1,
        paddingTop: 10
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
    buttonText3: {
        color: COLORS.primary,
        fontWeight: '600',
        fontSize: 22,
    },
    buttonText2: {
        color: COLORS.primary,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '35%',
        alignItems: 'center',
        alignSelf: 'center',
    },
    SignUpButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.backgroundColor,
        borderRadius: 12,
        height: 50,
        width: '100%',
        marginBottom: 20,
        marginTop: 10
    },
    googleButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 30,
        height: 62,
        width: 62,
        right: 7
    },
    appleButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 30,
        height: 62,
        width: 62,
        left: 7
    },

    dividerContainer: {
        width: 30,
        alignItems: 'center',
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#c0c1c3',
    },
    text: {
        color: '#c0c1c3',
        paddingHorizontal: 10,
        fontSize: 16,
    },
    container3: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20
    },
    checkBoxContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        padding: 0,
        marginLeft: 0,
    },
    checkBoxText: {
        color: '#c0c1c3',
        fontSize: 16,
        fontWeight: 'normal',
        marginLeft: 5,
    },
    forgotPasswordText: {
        color: COLORS.primary,
        textDecorationLine: 'underline',
        textAlign: 'right',
        paddingRight: 10,
        paddingTop: 0,
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingBottom: 10,
        paddingTop: 10,
        justifyContent: 'flex-end'
    },
    SigninButton: {
        width: 100,
        height: 40,
        backgroundColor: COLORS.cardBackground,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginLeft: 10,
        marginTop: -3
    }
});

export default AppLogin;
