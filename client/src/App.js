import { Redirect, Route, Switch } from 'react-router-dom';
import { ThemeContext } from './contexts/theme.context';
import { FetchProvider } from './contexts/fetch.context';
import { useContext, useEffect } from 'react';
import { AuthContext, AuthDispatchContext } from './contexts/auth.context';
import axios from 'axios';

// Components
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Login from './pages/login/login.component';
import Register from './pages/register/register.component';
import DummyPage from './pages/dummy.component..jsx';
import Contact from './pages/contact/contact.component';
import Products from './pages/products/products.component';
import ProductDetail from './pages/product-detail/detail.component';
import BottomNavigationFooter from './components/bottom-navigation-footer/bottom-navigation-footer.component';
import Account from './pages/account/account.component';

// Css
import './App.css';
// Material Ui
import { Paper, ThemeProvider } from '@material-ui/core';

function App() {
  const theme = useContext(ThemeContext);
  const authContextObj = useContext(AuthContext);
  const dispatch = useContext(AuthDispatchContext);
  useEffect(() => {
    async function getLoggedIn() {
      try {
        const data = await axios.get('/v1/user/verify-token');
        dispatch({ type: 'VERIFY_LOGIN', payload: data });
      } catch (error) {
        console.log('getLoggedIn Error', error);
        dispatch({ type: 'VERIFY_LOGIN', payload: false });
      }
    }
    getLoggedIn();
    return () => {};
  }, []);

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

  /* TALK TO ERIK ABOUT THIS PERFORMANCE ISSUE 
  If using both functions below that are commented. It will cause a state error on the login or register when setting redirect
  */

  // const UnauthenticatedRoutes = () => {
  //   return (
  //     <Switch>
  //       <Route exact path='/' component={HomePage} />
  //       <Route exact path='/login' component={Login} />
  //       <Route exact path='/register' component={Register} />
  //       <Route path='*'>
  //         <h1>404</h1>
  //       </Route>
  //     </Switch>
  //   );
  // };

  // function AppRoutes() {
  //   return (
  //     <Switch>
  //       {/* Protected Page Test Route */}
  //       <AuthenticatedRoute exact path='/test'>
  //         <DummyPage />
  //       </AuthenticatedRoute>
  //       <UnauthenticatedRoutes />
  //     </Switch>
  //   );
  // }

  return (
    <div className='App'>
      <FetchProvider>
        <ThemeProvider theme={theme}>
          <Paper elevation={0}>
            <Header />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/login' component={Login} />
              <Route path='/contact' component={Contact} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/products' component={Products} />
              <Route path='/products/:id' component={ProductDetail} />
              <Route path='/account' component={Account} />
              <AuthenticatedRoute exact path='/test'>
                <DummyPage />
              </AuthenticatedRoute>
              <AuthenticatedRoute exact path='/account-v2'>
                <Account />
              </AuthenticatedRoute>
              <Route exact path='/shop' component={DummyPage} />
              {/* <AppRoutes /> */}
              <Route path='*'>
                <h1>404</h1>
              </Route>
            </Switch>
            <BottomNavigationFooter />
          </Paper>
        </ThemeProvider>
      </FetchProvider>
    </div>
  );
}

export default App;
