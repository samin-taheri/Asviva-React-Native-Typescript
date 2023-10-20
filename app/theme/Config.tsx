import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const platform = Platform.OS;

//#region theme colors
export const themeColors = {
  light: {
    //#region Backgrounds colors
    backgroundPrimary: '#a11c18',
    cardBg: '#fff',
    //#endregion

    bottomTabColor: '#fff',
    tabItem: '#212121',
    cardBackgroundCOlor: "rgba(153, 92, 88, 0.1)",
    tabItemFocused: '#a11c18',
    defaultTextColor: 'black',
    inputBg: '#fff',
    inputText: '#000',
    cardBackground: '#f3f3f5',
    backgroundColor: '#f5f5f5',
    buttonBackground: 'rgba(198,60,56,0.5)',
    workoutBackground1: 'rgba(126,79,129,0.2)',
    workoutBackground2: 'rgba(83,79,129,0.2)',
    workoutBackground3: 'rgba(114,129,79,0.2)',
    workoutBackground4: 'rgba(90,124,95,0.2)',
    workoutBackground5: 'rgba(124,118,90,0.2)',
    workoutBackground6: 'rgba(124,107,90,0.2)',
    workoutBackground7: 'rgba(129,98,79,0.2)',
    workoutBackground8: 'rgba(129,79,126,0.2)',
    // default font color
    font: '#000000',
    screenBgColor: '#ebebeb',
    headerBackgroundColor: '#a11c18',
    headerColor: '#fff',

    // base colors
    primary: '#a11c18',
    secondary: '#e1bdbc',
    tertiary: '#FFE358',

    // non-colors
    black: '#000000',
    white: '#FFFFFF',

    // radio button
    radioButtonBorder: '#a11c18',
    radioButtonChecked: '#a11c18',

    // segment control
    segmentBar: '#F2F5F6',
    activeSegment: '#fff',

    // color variations
    gray: '#6c6c6c',
    lightGray: '#EFF1F3',
    error: '#DC3545',
    errorBg: '#f9d7da',
    warning: '#FFE358',
    successBg: '#d4edda',
    successText: '#155624',
    info: '#4DA1FF',
    primaryLightBg: '#feedb9',
    primaryDark: '#cd9b04',

    //ios statusbar color
    statusbarDark: 'light-content',
    statusbarLight: 'dark-content',

    // app colors
    selectedCheckboxBackground: '#48586E',
    unselectedCheckboxBorder: '#D4D4D4',
    placeholder: '#7E7E7E',
  },
  dark: {
    //#region Backgrounds colors
    backgroundPrimary: '#212121',
    cardBg: '#303030',
    //#endregion

    inputBg: '#212121',
    inputText: '#fff',
    bottomTabColor: '#303030',
    tabItem: '#000',
    tabItemFocused: '#fff',
    defaultTextColor: 'white',

    // default font color
    font: '#000000',
    screenBgColor: '#121212',
    headerBackgroundColor: '#212121',
    headerColor: '#dedede',

    // base colors
    primary: '#212121',
    secondary: '#403E3F',
    tertiary: '#FFE358',

    // non-colors
    black: '#fff',
    white: '#FFFFFF',

    // radio button
    radioButtonBorder: '#fff',
    radioButtonChecked: '#fff',

    // segment control
    segmentBar: '#212121',
    activeSegment: '#535453',

    // color variations
    gray: '#535453',
    lightGray: '#EFF1F3',
    error: '#DC3545',
    errorBg: '#f9d7da',
    warning: '#FFE358',
    successBg: '#d4edda',
    successText: '#155624',
    info: '#4DA1FF',
    primaryLightBg: '#feedb9',
    primaryDark: '#cd9b04',

    //ios statusbar color
    statusbarDark: 'light-content',
    statusbarLight: 'dark-content',

    // app colors
    selectedCheckboxBackground: '#48586E',
    unselectedCheckboxBorder: '#D4D4D4',
    placeholder: '#7E7E7E',
  },
};
//#endregion theme colors

export const COLORS = {
  ...themeColors.light,
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 16,
  radius: 8,
  padding: 16,
  radiusBtn: 8,

  inputHeight: 45,
  iconSize: 24,

  // font sizes
  h1: platform === 'android' ? 35 : 34,
  h2: 24,
  h3: 20,
  title: 18,
  subtitle: 14,
  caption: 12,
  medium: 16,
  small: 10,
  extraSmall: 8,

  inputText: 15,
  inputLabel: 14,
  inputError: 13,
  // app dimensions
  width,
  height,

  // header
  header: 50,
  subheader: 30,

  // bottom tab
  tabText: width * 0.035,
  tabIcon: width * 0.04,
  bottomTabHeight: 60,

  // product detail header
  headerIconSize: 24,

  // buttonHeight
  buttonHeight: 45,

  starSize: width * 0.045,

  shadow: {
    shadowColor: 'rgba(0,0,0,0.075)',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },

  //#region Spacing
  spacing: {
    none: 0,
    xs: 4,
    sm: 6,
    md: 8,
    lg: 12,
    xl: 24,
    '2xl': 32,
    '3xl': 64,
    '-xs': -4,
    '-sm': -6,
    '-md': -8,
    '-lg': -12,
    '-xl': -24,
    '-2xl': -32,
    '-3xl': -64,
  },
  //#endregion

  //#region Border Radius
  borderRadius: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 12,
    '2xl': 16,
    circle: 99999,
  },
  //#endregion
};

export const FONTS = {
  regular: 'Poppins-Regular',
  italic: 'Poppins-Italic',
  black: 'Poppins-Black',
  bold: 'Poppins-Bold',
  extraBold: 'Poppins-ExtraBold',
  medium: 'Poppins-Medium',
  semiBold: 'Poppins-SemiBold',
  thin: 'Poppins-Thin',
  light: 'Poppins-Light',
  fontFamily: 'Poppins-Regular',
  h1: {
    fontSize: SIZES.h1,
    fontFamily: 'Poppins-Regular',
    letterSpacing: 0.15,
  },
  h2: {
    fontSize: SIZES.h2,
    fontFamily: 'Poppins-Regular',
    letterSpacing: 0,
  },
  h3: {
    fontSize: SIZES.h3,
    fontFamily: 'Poppins-Regular',
    letterSpacing: 0.15,
  },
  title: {
    fontSize: SIZES.title,
    fontFamily: 'Poppins-Regular',
    letterSpacing: 0.15,
  },
  subtitle: {
    fontSize: SIZES.subtitle,
    fontFamily: 'Poppins-Regular',
  },
  caption: {
    fontSize: SIZES.caption,
    fontFamily: 'Poppins-Regular',
    letterSpacing: 0.4,
  },
  small: {
    fontSize: SIZES.small,
    fontFamily: 'Poppins-Regular',
    letterSpacing: 1.5,
  },
  input: {
    fontFamily: 'Poppins-Regular',
  },
  placeholder: {
    fontFamily: 'Poppins-Regular',
  },
  button: {
    fontFamily: 'Poppins-Regular',
  },
};

export const window = {
  offset: 10,
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
  designHeight: 810,
  designWidth: 375,
};

export const fontSize = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

export const padding = [5, 10, 15, 20, 25, 30, 35, 40, 45];

export const bottomTabHeight = window.height < 680 ? 50 : 75;

export const fingerSize = 40;
