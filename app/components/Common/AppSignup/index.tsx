import React, { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { AppButton, AppScreen, fields, Form, password } from '@/components';
import { Image, StyleSheet, TouchableOpacity, View, Text, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { COLORS } from '@/theme';
import { RootStackNavigationProps, Routes } from '@/navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const initial = {
    username: '',
    password: '',
};

const AppSignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [businessType, setBusinessType] = useState('');
    const navigation: StackNavigationProp<RootStackNavigationProps> = useNavigation();

    const schema = Yup.object({
        username: fields.text.label('Username').required('Bu alan zorunludur'),
        password: fields.password.label('Password').min(6, 'En az 6 karakter olmalı').required('Lütfen parola giriniz'),
    });

    const form = useForm({
        defaultValues: initial,
        resolver: yupResolver(schema),
    });

    const onSubmit = (values: typeof initial) => {
        console.log(values);
    };

    return (
        <React.Fragment>
            <AppScreen customStyle={{ justifyContent: 'center', backgroundColor: 'white', padding: 20 }}>
                <Text style={styles.title2}>Welcome!</Text>
                <Text style={styles.text}>Welcome back to the real estate. Advertise your property with us.</Text>
                <View style={{ marginTop: '10%' }}>
                    <Text style={styles.label}>Business Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Golden City"
                        placeholderTextColor="#A1A1A1"
                        value={businessName}
                        onChangeText={setBusinessName}
                    />
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.label}>Type of Business</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Property Company"
                            placeholderTextColor="#A1A1A1"
                            value={businessType}
                            onChangeText={setBusinessType}
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="kdjcbk@gmail.com"
                            placeholderTextColor="#A1A1A1"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="#A1A1A1"
                            value={password}
                            secureTextEntry={true}
                            onChangeText={setPassword}
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.label}>Confirm Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            placeholderTextColor="#A1A1A1"
                            value={confirmPassword}
                            secureTextEntry={true}
                            onChangeText={setConfirmPassword}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate(Routes.MAIN_TABS_ROOT)}>
                    <Text style={styles.text2}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.text3}>OR</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', top: '20%', width: '70%', alignSelf: 'center' }}>
                    <Image
                        source={require('../../../assets/images/Google.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../../../assets/images/Facebook.png')}
                        style={styles.image2}
                    />
                    <Image
                        source={require('../../../assets/images/Apple.png')}
                        style={styles.image}
                    />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate(Routes.MAIN_TABS_ROOT)}>
                    <Text style={styles.text4}>Already Have An Account? <Text style={{ color: COLORS.primary }}>Sign In</Text></Text>
                </TouchableOpacity>
            </AppScreen>
        </React.Fragment>
    );
};

export default AppSignUp;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        width: 60,
        height: 60,
    },
    image2: {
        width: 30,
        height: 30,
        top: 15
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: COLORS.secondary
    },
    signInButton: {
        width: 103,
        height: 34,
        backgroundColor: COLORS.secondary,
        borderRadius: 5,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        top: '5%'

    },
    input: {
        borderWidth: 1,
        borderBottomColor: COLORS.primary,
        borderTopColor: 'white',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        borderRadius: 4,
        padding: 1,
        fontSize: 16,
        color: 'black'
    },
    backContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        marginRight: 50,
        marginBottom: 50

    },
    backButton: {
        backgroundColor: 'transparent',
    },
    backText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.secondary,
    },
    boxText: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingLeft: 20,
        paddingBottom: 20,
    },
    box1: {
        width: 156,
        height: 150,
        backgroundColor: COLORS.secondary,
        borderRadius: 10,
        justifyContent: 'flex-end'
    },
    box2: {
        width: 156,
        height: 150,
        backgroundColor: '#EE6C4D',
        borderRadius: 10,
        justifyContent: 'flex-end',
        marginLeft: 20
    },
    title: {
        fontSize: 40,
        color: COLORS.secondary,
        textAlign: 'center',
        fontWeight: '700'
    },
    title2: {
        fontSize: 36,
        color: '#EE6C4D',
        textAlign: 'left',
        fontWeight: '700'
    },
    text: {
        fontSize: 20,
        color: COLORS.secondary,
        paddingTop: 10
    },
    text2: {
        fontSize: 16,
        color: '#fff',
    },
    text3: {
        fontSize: 16,
        color: COLORS.secondary,
        top: '8%',
        textAlign: 'center'
    },
    text4: {
        fontSize: 14,
        color: COLORS.secondary,
        top: 85,
        textAlign: 'center'
    },
});
