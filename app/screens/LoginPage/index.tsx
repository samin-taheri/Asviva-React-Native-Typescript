import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType } from '@/navigation';

import { AppScreen, fields } from '@/components';
import AppCustomHeader from '@/components/Common/AppCustomHeader';
import AppLogin from '@/components/Common/AppLogin';

const initial = {
  username: '',
  password: '',
};

const LoginPage = () => {
  const navigation = useNavigation<HomeStackNavigationPropsType>();

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
      <AppCustomHeader navigation={navigation} onLogo={true} />
      <AppScreen keyboardScroll>
        <AppLogin />
      </AppScreen>
    </React.Fragment>
  );
};

export default LoginPage;
