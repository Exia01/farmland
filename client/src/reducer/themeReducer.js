export const initializer = () => {
  const initialState = {
    palette: {
      type: 'light',
    },
    expiresAt: {},
  };

  // const paletteType JSON.parse(localStorage.getItem('localTheme')) || initialState;
  return (
    JSON.parse(localStorage.getItem('localThemePreference')) || initialState
  );
};

export const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      const updatedType = state.palette.type === 'light' ? 'dark' : 'light';
      //   let updatedState = JSON.parse(JSON.stringify(state));
      const updateThemePref = {
        ...state,
        palette: {
          ...state.palette,
          type: updatedType,
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
