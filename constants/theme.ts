import { Platform } from 'react-native';

export const theme = {
  neutralWhite: '#FFFFFF',
  neutralGray: '#F5F5F5',
  textDark: '#333333',
  textLight: '#828282ff',

  primary: '#3adb72ff', 
  primaryLight: '#7af9a7ff', 
  primaryDark: '#035f23ff', 
  accentOrange: '#fb9348ff',
  accentLight: '#fdb886ff',
  accentDark: '#f77213ff',

  gray: '#888787ff',
  grayLight: '#d9d4d4ff',
  grayDark: '#3d3c3cff',
  placeholder: '#c4c4c4ff',

  success: '#28A745',
  error: '#DC3545',
};

export const second ={
//buttons
  primary: '#ff7f50',
  primarySecond: '#ffd700',
  //accent, notifications and secondary btn
  secondary: '#e74c3c',
  secondary2: '#e9967a',
  secondary3: '#1d1816ff',
  mainBg: '#f1f0eeff',
  text: '#475b6fff',
 // primary: '#00c26f',
//  primaryDark: '#008e5b',
  dark: '#0a0a0aff',
  white: '#ffffff',
  darkLight: '#090808ff',
  gray: '#e3e3e3',
  grayDark: '#797878ff',
  grayLight: '#aaa9a9ca',
  //text: '#494949',
  textDark: '#1d1d1d',
  rose: '#ef4444',
  roseLight: '#f87171',
}

export const radius = {
  xsm: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 20,
  xxxl: 22,
  really: 24,
}


const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
