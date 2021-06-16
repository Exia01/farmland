export const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGOUT':
      const resetState = {
        ...state,
        token: '',
        expiresAt: '',
        userInfo: {},
      };
      return resetState;
    case 'LOGIN':
      const { token, userInfo, expiresAt } = action.payload;
      const updatedState = {
        ...state,
        token,
        userInfo,
        expiresAt,
      };
      return updatedState;
    case 'VERIFY_LOGIN':
      return {
        ...state,
        loggedIn: action.payload,
      };
    default:
      return state;
  }
};

// Actions and Types
export const login = (authState) => ({
  type: 'LOGIN',
  payload: authState,
});

export const logout = (authState) => ({
  type: 'LOGOUT',
  payload: authState,
});

export const verifyLogin = (authState) => ({
  type: 'VERIFY_LOGIN',
  payload: authState,
});

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  payload: token,
});

export const UserActionTypes = {
  LOGOUT: 'LOGOUT',
  LOGIN: 'LOGIN',
};
