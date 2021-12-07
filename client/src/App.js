import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
//Components

// Pages
import Landing from './pages/Landing';
import Navbar from './components/Navbar';

// Css

// MUI
import { Container, Paper, ThemeProvider } from '@mui/material';

// Context
import { ThemeContext } from './context/Theme/index';
export default function App() {
  const theme = useContext(ThemeContext);
  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <Paper elevation={0}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Landing />} />
          </Routes>
        </Paper>
      </ThemeProvider>
    </div>
  );
}
