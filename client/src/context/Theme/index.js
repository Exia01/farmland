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
        // main: '#f7f7f7',
        main: '#4caf50',
        light: 'rgb(111, 191, 115)',
        dark: 'rgb(53, 122, 56)',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
      secondary: {
        main: '#ff9100',
        light: 'rgb(255, 167, 51)',
        dark: 'rgb(178, 101, 0)',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
      background: { ...getPaperColor(themePreference) },

      // background: themePreference.palette.mode === 'dark' && {
      //   default: '#001E3C',
      //   paper: '#0A1929',
      // },
    },
  });
  function getPaperColor(themePreference) {
    if (themePreference != null) {
      let { mode } = themePreference.palette;
      let background = {};
      switch (mode) {
        case 'light':
          background = {
            paper: '#fff',
            default: '#fff',
          };
          break;
        case 'dark':
          background = {
            default: '#001E3C',
            paper: '#0A1929',
          };
          break;
        default:
          background = {
            paper: '#fff',
            default: '#fff',
          };
          break;
      }
      return background;
    }
  }

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

const samplePalette = {
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
    unit: 'px',
  },
  direction: 'ltr',
  components: {
    MuiCssBaseline: {
      defaultProps: {
        enableColorScheme: true,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        sizeLarge: {
          padding: '1rem 1.25rem',
          fontSize: '1rem',
          lineHeight: 1.3125,
          letterSpacing: 0,
          fontFamily:
            '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
          fontWeight: 700,
        },
        containedPrimary: {
          color: '#fff',
        },
      },
      variants: [
        {
          props: {
            variant: 'code',
          },
          style: {
            color: '#BFC7CF',
            border: '1px solid',
            borderColor: '#265D97',
            backgroundColor: '#132F4C',
            fontSize: '0.875rem',
            lineHeight: 1.5,
            letterSpacing: 0,
            fontFamily:
              'Consolas,Menlo,Monaco,Andale Mono,Ubuntu Mono,monospace',
            fontWeight: 600,
            WebkitFontSmoothing: 'subpixel-antialiased',
            '&:hover, &.Mui-focusVisible': {
              borderColor: '#4caf50',
              backgroundColor: '#173A5E',
              '& .MuiButton-endIcon': {},
            },
            '& .MuiButton-startIcon': {
              color: '#BFC7CF',
            },
            '& .MuiButton-endIcon': {
              color: '#BFC7CF',
            },
          },
        },
      ],
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width:900px)': {
            paddingLeft: '16px',
            paddingRight: '16px',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#132F4C',
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          fontWeight: 700,
          display: 'inline-flex',
          alignItems: 'center',
          '&.MuiTypography-body1 > svg': {
            marginTop: 2,
          },
          '& svg:last-child': {
            marginLeft: 2,
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          '&:hover, &:focus': {
            backgroundColor: '',
          },
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: {
          type: {},
          compare: null,
        },
      },
      styleOverrides: {
        iconFilled: {
          top: 'calc(50% - .25em)',
        },
      },
    },
    MuiTab: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#0A1929',
          '&[href]': {
            textDecorationLine: 'none',
          },
        },
        outlined: {
          display: 'block',
          borderColor: '#265D97',
          backgroundColor: '#132F4C',
          'a&, button&': {
            '&:hover': {
              boxShadow: '1px 1px 20px 0 rgb(90 105 120 / 20%)',
            },
          },
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#4caf50',
      light: 'rgb(111, 191, 115)',
      dark: 'rgb(53, 122, 56)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
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
    secondary: {
      main: '#ff9100',
      light: 'rgb(255, 167, 51)',
      dark: 'rgb(178, 101, 0)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
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
  },
  nprogress: {
    color: '#3399FF',
  },
};
const test2 = {
  direction: 'ltr',
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          '&[href]': {
            textDecorationLine: 'none',
          },
        },
        outlined: {
          display: 'block',
          borderColor: '#E5E8EC',
          'a&, button&': {
            '&:hover': {
              boxShadow: '1px 1px 20px 0 rgb(90 105 120 / 20%)',
            },
          },
        },
      },
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#4caf50',
      light: 'rgb(111, 191, 115)',
      dark: 'rgb(53, 122, 56)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
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
      main: '#ff9100',
      light: 'rgb(255, 167, 51)',
      dark: 'rgb(178, 101, 0)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
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
  },
};
