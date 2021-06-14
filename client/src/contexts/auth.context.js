import { createContext, useEffect, useReducer } from 'react';
import { userReducer } from '../reducer/userReducer';

const AuthContext = createContext();
const AuthDispatchContext = createContext();
const { Provider } = AuthContext;

const initializer = () => {
  const initialState = {
    token: '',
    expiresAt: '',
    userInfo: {},
  };

  return JSON.parse(localStorage.getItem('localAuthState')) || initialState;

  // Could also separate if preferable
  // const token = localStorage.getItem('token');
  // const userInfo = localStorage.getItem('userInfo');
  // const expiresAt = localStorage.getItem('expiresAt');
};
const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(userReducer, {}, initializer);

  useEffect(() => {
    localStorage.setItem('localAuthState', JSON.stringify(authState));
  }, [authState]);

  const isAuthenticated = () => {
    //if properties aren't present
    if (!authState.token || !authState.expiresAt) {
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
