import { createContext, useEffect, useReducer } from 'react';
import { createMuiTheme } from '@material-ui/core';

import { themeReducer, initializer } from '../reducer/themeReducer';

export const ThemeContext = createContext();
export const SetContext = createContext();

export default function CurrentThemeProvider(props) {
  const [themePreference, dispatch] = useReducer(themeReducer, {}, initializer);
  const theme = createMuiTheme({
    palette: {
      type: themePreference.palette.type,
      primary: {
        light: '#8fb54e',
        main: '#74a322',
        dark: '#517217',
        contrastText: '#fff',
      },
      secondary: {
        light: '#5c544d',
        main: '#342A21',
        dark: '#241d17',
        contrastText: '#000',
      },
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
