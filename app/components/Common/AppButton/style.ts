import {StyleSheet} from 'react-native';

import {COLORS, fingerSize, FONTS} from '@/theme';

import {IButtonTypes} from './app-button';

const styles = StyleSheet.create({
  disabled: {
    backgroundColor: COLORS.info,
  },
  container: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontWeight: '600',
    fontSize: 15
  },
  activityIndicator: {
    paddingRight: 10,
  },
});

export const buttonTypesStyles: IButtonTypes = {
  primary: {
    text: {
      color: COLORS.white,
      fontWeight: 'bold',
      fontSize: 18
    },
  },
  secondary: {
    text: {
      color: COLORS.black,
    },
  },
  outline: {
    container: {
      backgroundColor: COLORS.secondary,
    },
    text: {
      color: COLORS.black,
    },
  },
  icon: {
    container: {
      width: fingerSize,
      height: fingerSize,
      padding: 0,
    },
    text: {},
  },
};

export default styles;
