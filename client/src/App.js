import { useContext } from 'react';
import { Route, Switch } from 'react-router';
import { ThemeContext } from './contexts/theme.context';

// Components
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Contact from './pages/contact/contact.component';
import TestPage from './components/testpage/testpage';


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
            <Route path='/contact' component={Contact} />
            {/* Protected Test Route Page */}
          </Switch>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
