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
