import { useContext } from 'react';
import { Route, Switch } from 'react-router';
import { ThemeContext } from './contexts/theme.context';

// Components
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import TestPage from './components/testpage/testpage';
import Login from './pages/login/login.component';
import Register from './pages/register/register.component';

// Css
import './App.css';
// Material Ui
import { Paper, ThemeProvider } from '@material-ui/core';

function App() {
  const theme = useContext(ThemeContext);

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Paper elevation={0}>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            {/* Protected Test Route Page */}
          </Switch>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
