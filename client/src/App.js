import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
//Components
import Navbar from './components/Navbar';
import NavigationFooter from './components/NavigationFooter';

// Pages
import Landing from './pages/Landing';
import Products from './pages/Products/index';
import ProductDetail from './pages/ProductDetail/index';
import Login from './pages/Login/index';
import Register from './pages/Register/index';

// Css
import './App.css';
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
            <Route path='/products' element={<Products />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/products/:id' element={<ProductDetail />} />
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
