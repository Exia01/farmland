import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
//Components
import Navbar from './components/Navbar';

// Pages
import Landing from './pages/Landing';
import Products from './pages/Products/index';

// Css
import './App.css';
// MUI
import { Container, Paper, ThemeProvider } from '@mui/material';

// Context
import { ThemeContext } from './context/Theme/index';
import NavigationFooter from './components/NavigationFooter';
export default function App() {
  const theme = useContext(ThemeContext);
  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <Paper elevation={0}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/products' element={<Products />} />
            <Route
              path='*'
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Danger Will Robinson!</p>
                </main>
              }
            />
          </Routes>
          <NavigationFooter />
        </Paper>
      </ThemeProvider>
    </div>
  );
}
