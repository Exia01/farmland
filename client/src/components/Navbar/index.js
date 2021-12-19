import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';

// Logo
import logo from '../../uploads/images/icons/farmlandLogo3.png';

// MUI
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Container,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import MobileDrawer from './MobileDrawer/index';

// styles
// A way to do do conditionals
// sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose(e) {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }
    setOpen(false);
  }

  return (
    <>
      <AppBar
        title='Farmland'
        elevation={0}
        position='relative'
        sx={{ padding: '16px 0', backgroundColor: 'inherit' }}
      >
        <Container disableGutters={true}>
          <Toolbar>
            {/* Left Section */}
            <div>
              <Link component={RouterLink} to='/'>
                <Box
                  component='img'
                  sx={{
                    maxHeight: { xs: 70 },
                    maxWidth: { xs: '100%', md: 189 },
                  }}
                  alt='Logo'
                  src={logo}
                />
              </Link>
            </div>

            {/* center div */}
            <Container>
              <Box
                component='div'
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  justifyContent: 'center',
                  gap: 2,
                }}
              >
                <Link
                  component={RouterLink}
                  to='/'
                  sx={{ color: 'text.primary' }}
                  underline='hover'
                >
                  <Typography variant='h6' gutterBottom component='div'>
                    Buy Online
                  </Typography>
                </Link>
                <Link
                  component={RouterLink}
                  to='/'
                  sx={{ color: 'text.primary' }}
                  underline='hover'
                >
                  <Typography variant='h6' gutterBottom component='div'>
                    About Us{' '}
                  </Typography>
                </Link>
              </Box>
            </Container>

            {/* Right Section */}
            <Box
              component='div'
              sx={{
                flex: '0 0 20%',
                display: 'flex',
                gap: 0.5,
                justifyContent: 'flex-end',
              }}
            >
              <ThemeToggle />
              <IconButton color='inherit'>
                <ShoppingCart />
              </IconButton>
              <IconButton
                color='inherit'
                onClick={handleDrawerOpen}
                sx={{ display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <MobileDrawer
        handleDrawerClose={handleDrawerClose}
        open={open}
      ></MobileDrawer>
    </>
  );
}

// https://stackoverflow.com/questions/68471759/when-migrating-to-material-ui-v5-how-to-deal-with-conditional-classes/68472931#68472931

// https://stackoverflow.com/questions/69500357/how-to-implement-conditional-styles-in-mui-v5-sx-prop
