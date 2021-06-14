import { Redirect, Route, Switch } from 'react-router-dom';
import { ThemeContext } from './contexts/theme.context';
import { FetchProvider } from './contexts/fetch.context';
import { useContext } from 'react';
import { AuthContext } from './contexts/auth.context';

// Components
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Login from './pages/login/login.component';
import Register from './pages/register/register.component';
import DummyPage from './pages/dummy.component..jsx';

// Css
import './App.css';
// Material Ui
import { Paper, ThemeProvider } from '@material-ui/core';

function App() {
  const theme = useContext(ThemeContext);
  const authContextObj = useContext(AuthContext);

  const AuthenticatedRoute = ({ children, ...rest }) => {
    //could implement import here?
    // const authContextObj = useContext(AuthContext);
    return (
      <Route
        {...rest}
        render={() =>
          authContextObj.isAuthenticated() ? (
            <>{children}</>
          ) : (
            <Redirect to='/login' />
          )
        }
      ></Route>
    );
  };

  const UnauthenticatedRoutes = () => {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route path='*'>
          <h1>404</h1>
        </Route>
      </Switch>
    );
  };

  function AppRoutes() {
    return (
      <Switch>
        {/* Protected Page Test Route */}
        <AuthenticatedRoute exact path='/test'>
          <DummyPage />
        </AuthenticatedRoute>
        <UnauthenticatedRoutes />
      </Switch>
    );
  }
  return (
    <div className='App'>
      <FetchProvider>
        <ThemeProvider theme={theme}>
          <Paper elevation={0}>
            <Header />
            <AppRoutes />
          </Paper>
        </ThemeProvider>
      </FetchProvider>
    </div>
  );
}

export default App;
