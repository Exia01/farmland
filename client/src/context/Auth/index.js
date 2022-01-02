import { createContext, useEffect, useReducer } from 'react';
import { userReducer } from '../reducer/userReducer';

const AuthContext = createContext();
const AuthDispatchContext = createContext();
const { Provider } = AuthContext;

const initializer = () => {
  const initialState = {
    token: null,
    expiresAt: JSON.parse(localStorage.getItem('expiresAt')) || '',
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
    loggedIn: null,
  };

  return initialState;
};
const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(userReducer, {}, initializer);

  useEffect(() => {
    localStorage.setItem('expiresAt', JSON.stringify(authState.expiresAt));
    localStorage.setItem('userInfo', JSON.stringify(authState.userInfo));
  }, [authState]);

  const isAuthenticated = () => {
    //if properties aren't present
    if (!authState.expiresAt) {
      return false;
    }

    //calculation to check if it is expire
    return new Date().getTime() / 1000 < authState.expiresAt;
  };

  const isAdmin = () => {
    return authState.userInfo.role === 'admin';
  };

  return (
    <Provider
      value={{
        authState,
        isAuthenticated,
        isAdmin,
      }}
    >
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </Provider>
  );
};

export default AuthProvider;
export { AuthContext, AuthDispatchContext };
