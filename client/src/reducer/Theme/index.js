export const initializer = () => {
  const initialState = {
    palette: {
      mode: 'dark',
    },
  };

  // const paletteType JSON.parse(localStorage.getItem('localTheme')) || initialState;
  return (
    JSON.parse(localStorage.getItem('localThemePreference')) || initialState
  );
};

export const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      const updatedMode = state.palette.mode === 'light' ? 'dark' : 'light';
      //   let updatedState = JSON.parse(JSON.stringify(state));
      const updateThemePref = {
        ...state,
        palette: {
          ...state.palette,
          mode: updatedMode,
        },
      };
      return updateThemePref;
    default:
      return state;
  }
};

export const toggleTheme = (theme) => ({
  type: 'TOGGLE_THEME',
  theme,
});
