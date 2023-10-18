import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType, Routes } from '@/navigation';
import { fields } from '@/components';
import AppLogin from '@/components/Common/AppLogin';

const initial = {
  username: '',
  password: '',
};

const LoginPage = () => {
  const navigation = useNavigation<HomeStackNavigationPropsType>();

  const handleLogin = (username: string, password: string) => {
    console.log(`Logging in with username: ${username} and password: ${password}`);
  };

  const handleRegister = () => {
    console.log('Navigating to registration page');
  };

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
      <AppLogin onLogin={handleLogin} onRegister={handleRegister} navigate={() => navigation.navigate(Routes.HOME_ROOT)} forgotPassword={() => navigation.navigate(Routes.FORGOTPASSWORD_SCREEN)} signUp={() => navigation.navigate(Routes.SIGNUP_SCREEN)} NavigateHome={() => navigation.navigate(Routes.MAIN_TABS_ROOT)} />
    </React.Fragment>
  );
};

export default LoginPage;
