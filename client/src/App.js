import { useContext } from 'react';
import { Route, Switch } from 'react-router';
import { ThemeContext } from './contexts/theme.context';
import { useAuth0 } from '@auth0/auth0-react';

// Components
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import TestPage from './components/testpage/testpage';
import ProtectedRoute from './auth/protected-route';
import Loading from './auth/loading';

// Css
import './App.css';
// Material Ui
import { Paper, ThemeProvider } from '@material-ui/core';

function App() {
  const { isLoading } = useAuth0();
  const theme = useContext(ThemeContext);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Paper elevation={0}>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <ProtectedRoute path='/test' component={TestPage} />
          </Switch>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
