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
        light: '#e3d3c4',
        main: '#DCC9B6',
        dark: '#9a8c7f',
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
