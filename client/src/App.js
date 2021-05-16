import { Route, Switch } from 'react-router';
import './App.css';

import { createMuiTheme, Paper, ThemeProvider } from '@material-ui/core';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import TestPage from './components/testpage/testpage';
import { useContext } from 'react';
import { ThemeContext } from './contexts/theme.context';

// Custom theme

function App() {
  const theme = useContext(ThemeContext);
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Paper elevation={0}>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/test' component={TestPage} />
          </Switch>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
