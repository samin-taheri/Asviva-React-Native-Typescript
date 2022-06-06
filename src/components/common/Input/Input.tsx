/* eslint-disable react-native/no-inline-styles */
import React, {FC, useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Block} from '../Block/Block';
import styles from './style';
import {Text} from './../Text/Text';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {FONTS} from '@theme';
import {Icon} from '../../../assets/icons';
import {Shadow} from '../Shadow/Shadow';

type Props = {
  placeholder?: string;
  onChange?: ((text: string) => void) | undefined;
  handleBlur?: ((event: any) => void) | undefined;
  onFocus?: ((event: any) => void) | undefined;
  value?: any;
  errorMessage?: string;
  animatedPlaceholder?: string;
  icon?: string;
};

const inputHeight = 58;
const offsetHeight = inputHeight / 3.8;

export const Input: FC<Props | any> = props => {
  const {placeholder,onChange,value,errorMessage,handleBlur,animatedPlaceholder,icon,onFocus} = props; // prettier-ignore
  const offset = useSharedValue(offsetHeight);
  const scale = useSharedValue(1);
  const [text, setText] = useState('');

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: offset.value}],
    };
  });

  const animatedStylesText = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  const onAnimation = ({_offset, _scale}: any) => {
    const timing_config = {
      duration: 500,
      easing: Easing.out(Easing.exp),
    };
    offset.value = withTiming(_offset, timing_config);
    scale.value = withTiming(_scale, timing_config);
  };

  const onBlur = (e: Event) => {
    if (!text) {
      onAnimation({_offset: offsetHeight, _scale: 1});
      handleBlur && handleBlur(e);
    }
  };

  const onChangeText = (t: string) => {
    setText(t);
    onChange(t);
  };

  return (
    <Shadow sm>
      <Block style={styles.container} fd="row">
        {icon && (
          <Block justify="center" align="center">
            <Icon name={icon} width="35" height="35" />
          </Block>
        )}
        <Block
          flex={1}
          style={[
            //styles.container,
            errorMessage && styles.errorContainer,
            {
              height: inputHeight,
            },
          ]}>
          <Animated.View style={[{position: 'absolute'}, animatedStyles]}>
            <Animated.View
              style={[
                animatedStylesText,
                {
                  flex: 1,
                },
              ]}>
              <Text style={style.animatedPlaceholderStyle}>
                {animatedPlaceholder}
              </Text>
            </Animated.View>
          </Animated.View>

          <TextInput
            onFocus={() => {
               onFocus ? onFocus() : onAnimation({_offset: 5, _scale: 0.75});
              }} // prettier-ignore
            onBlur={onBlur}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={[styles.input, errorMessage && styles.errorInput]}
            allowFontScaling={false}
            value={value}
          />
        </Block>
        {errorMessage && (
          <Block px={10}>
            <Text fs={11} color="red">
              <Text color="red">{'\u2022'} </Text>
              {errorMessage}
            </Text>
          </Block>
        )}
      </Block>
    </Shadow>
  );
};

const style = StyleSheet.create({
  animatedPlaceholderStyle: {
    flex: 1,
    left: 0,
    position: 'absolute',
    fontSize: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 100,
    fontFamily: FONTS.medium,
    color: '#ACACAC',
  },
});
