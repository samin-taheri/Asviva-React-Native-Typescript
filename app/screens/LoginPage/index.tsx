import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType, Routes } from '@/navigation';

import { AppButton, AppScreen, fields, Form } from '@/components';
import { Pressable, Text } from 'react-native';
import AppCustomHeader from '@/components/Common/AppCustomHeader';

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
        <Pressable style={{ borderRadius: 8, backgroundColor: '#ccc', padding: 8, flexDirection: 'row', height: 33, alignItems: 'center', width: '25%' }} onPress={() => {
          navigation.navigate(Routes.FORM_SCREEN, {
            detailId: '1530',
          });
        }}>
          <Text style={{ fontSize: 13 }}>Guest Mode</Text>
        </Pressable>
        <Form schema={schema} form={form} />
        <AppButton mt-10 type="secondary" onPress={form.handleSubmit(onSubmit)} title="Submit" />
      </AppScreen>
    </React.Fragment>
  );
};

export default LoginPage;
