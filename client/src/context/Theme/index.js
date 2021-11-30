import { createTheme } from '@mui/material';

import { createContext, useEffect, useReducer } from 'react';

import { themeReducer, initializer } from '../../reducer/Theme';

export const ThemeContext = createContext();
export const SetContext = createContext();

export default function CurrentThemeProvider(props) {
  const [themePreference, dispatch] = useReducer(themeReducer, {}, initializer);
  const theme = createTheme({
    palette: {
      mode: themePreference.palette.mode,
      primary: {
        main: '#f7f7f7',
      },
      // background: themePreference.palette.mode === 'dark' && {
      //   default: '#001E3C',
      //   paper: '#0A1929',
      // },
    },
  });

  useEffect(() => {
    localStorage.setItem(
      'localThemePreference',
      JSON.stringify(themePreference)
    );
  }, [themePreference]);

  return (
    <ThemeContext.Provider value={theme}>
      {/* wrapping inside makes it so that we only have to wrap components with one provider */}
      <SetContext.Provider value={dispatch}>
        {props.children}
      </SetContext.Provider>
    </ThemeContext.Provider>
  );
}

const darkColors = {
  mode: 'dark',
  primary: {
    main: '#2196f3',
    light: 'rgb(77, 171, 245)',
    dark: 'rgb(23, 105, 170)',
    contrastText: '#fff',
  },
  divider: '#132F4C',
  primaryDark: {
    50: '#E2EDF8',
    100: '#CEE0F3',
    200: '#91B9E3',
    300: '#5090D3',
    400: '#265D97',
    500: '#1E4976',
    600: '#173A5E',
    700: '#132F4C',
    800: '#001E3C',
    900: '#0A1929',
    main: '#5090D3',
  },
  background: {
    default: '#001E3C',
    paper: '#0A1929',
  },
  common: {
    black: '#1D1D1D',
    white: '#fff',
  },
  text: {
    primary: '#fff',
    secondary: '#AAB4BE',
    disabled: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
  },
  grey: {
    50: '#F3F6F9',
    100: '#EAEEF3',
    200: '#E5E8EC',
    300: '#D7DCE1',
    400: '#BFC7CF',
    500: '#AAB4BE',
    600: '#7F8E9D',
    700: '#46505A',
    800: '#2F3A45',
    900: '#20262D',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },
  error: {
    50: '#FFF0F1',
    100: '#FFDBDE',
    200: '#FFBDC2',
    300: '#FF99A2',
    400: '#FF7A86',
    500: '#FF505F',
    600: '#EB0014',
    700: '#C70011',
    800: '#94000D',
    900: '#570007',
    main: '#EB0014',
    light: '#FF99A2',
    dark: '#C70011',
    contrastText: '#fff',
  },
  success: {
    50: '#E9FBF0',
    100: '#C6F6D9',
    200: '#9AEFBC',
    300: '#6AE79C',
    400: '#3EE07F',
    500: '#21CC66',
    600: '#1DB45A',
    700: '#1AA251',
    800: '#178D46',
    900: '#0F5C2E',
    main: '#1DB45A',
    light: '#6AE79C',
    dark: '#1AA251',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  warning: {
    50: '#FFF9EB',
    100: '#FFF4DB',
    200: '#FFEDC2',
    300: '#FFE4A3',
    400: '#FFD980',
    500: '#FCC419',
    600: '#FAB005',
    700: '#F1A204',
    800: '#DB9A00',
    900: '#8F6400',
    main: '#F1A204',
    light: '#FFE4A3',
    dark: '#F1A204',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  secondary: {
    main: '#f50057',
    light: 'rgb(247, 51, 120)',
    dark: 'rgb(171, 0, 60)',
    contrastText: '#fff',
  },
  info: {
    main: '#29b6f6',
    light: '#4fc3f7',
    dark: '#0288d1',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
  action: {
    active: '#fff',
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },
};
const lightColors = {
  mode: 'light',
  primary: {
    main: '#2196f3',
    light: 'rgb(77, 171, 245)',
    dark: 'rgb(23, 105, 170)',
    contrastText: '#fff',
  },
  divider: '#E5E8EC',
  primaryDark: {
    50: '#E2EDF8',
    100: '#CEE0F3',
    200: '#91B9E3',
    300: '#5090D3',
    400: '#265D97',
    500: '#1E4976',
    600: '#173A5E',
    700: '#132F4C',
    800: '#001E3C',
    900: '#0A1929',
    main: '#5090D3',
  },
  common: {
    black: '#1D1D1D',
    white: '#fff',
  },
  text: {
    primary: '#20262D',
    secondary: '#46505A',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  grey: {
    50: '#F3F6F9',
    100: '#EAEEF3',
    200: '#E5E8EC',
    300: '#D7DCE1',
    400: '#BFC7CF',
    500: '#AAB4BE',
    600: '#7F8E9D',
    700: '#46505A',
    800: '#2F3A45',
    900: '#20262D',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },
  error: {
    50: '#FFF0F1',
    100: '#FFDBDE',
    200: '#FFBDC2',
    300: '#FF99A2',
    400: '#FF7A86',
    500: '#FF505F',
    600: '#EB0014',
    700: '#C70011',
    800: '#94000D',
    900: '#570007',
    main: '#EB0014',
    light: '#FF99A2',
    dark: '#C70011',
    contrastText: '#fff',
  },
  success: {
    50: '#E9FBF0',
    100: '#C6F6D9',
    200: '#9AEFBC',
    300: '#6AE79C',
    400: '#3EE07F',
    500: '#21CC66',
    600: '#1DB45A',
    700: '#1AA251',
    800: '#178D46',
    900: '#0F5C2E',
    main: '#1AA251',
    light: '#6AE79C',
    dark: '#1AA251',
    contrastText: '#fff',
  },
  warning: {
    50: '#FFF9EB',
    100: '#FFF4DB',
    200: '#FFEDC2',
    300: '#FFE4A3',
    400: '#FFD980',
    500: '#FCC419',
    600: '#FAB005',
    700: '#F1A204',
    800: '#DB9A00',
    900: '#8F6400',
    main: '#F1A204',
    light: '#FFE4A3',
    dark: '#F1A204',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  secondary: {
    main: '#f50057',
    light: 'rgb(247, 51, 120)',
    dark: 'rgb(171, 0, 60)',
    contrastText: '#fff',
  },
  info: {
    main: '#0288d1',
    light: '#03a9f4',
    dark: '#01579b',
    contrastText: '#fff',
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
  background: {
    paper: '#fff',
    default: '#fff',
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
};
