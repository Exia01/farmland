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
  Button,
  Container,
  Link,
  Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

// styles
// import { appBarStyles } from './navbar.styles';
import { styled } from '@mui/system';

// const StyledAppBar = styled(AppBar)(
//   ({ theme }) => `
//   padding:20px 0;
//   }
// `
// );
// const StyledLogoDiv = styled('div')(({ theme }) => ({
//   flex: '0 150px',
// }));

// const StyledImageLogo = styled('img')({
//   maxHeight: '70px',
//   maxWidth: '100%',
// });
// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// }));

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <>
      {/* <StyledAppBar title='Farmland' elevation={0} position='relative'>
        <Container disableGutters={true}>
          <Toolbar sx={{ justifyContent: { xs: 'space-between' } }}>
            {/* logo */}
            <Box
              component='div'
              sx={{
                flex: { xs: 1, md: '0 0 20%' },
                maxWidth: 170,
              }}
            >
              <Link component={RouterLink} to='/'>
                <StyledImageLogo src={logo} alt='Logo' />
              </Link>
            </Box>

            {/* Center Links */}
            <Box
              component='div'
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: '1rem',
                flex: { md: '40%' },
                justifyContent: 'center',
              }}
            >
              <Link
                component={RouterLink}
                to='/'
                sx={{ color: 'text.primary' }}
                underline='hover'
              >
                <Typography variant='h6' gutterBottom component='div'>
                  Shop Online
                </Typography>
              </Link>
              <Link
                component={RouterLink}
                to='/'
                sx={{ color: 'text.primary' }}
                underline='hover'
              >
                <Typography variant='h6' gutterBottom component='div'>
                  Contact Us
                </Typography>
              </Link>
            </Box>

            {/* Right Section */}
            <Box
              component='div'
              sx={{
                flex: '0 0 20%',
                display: 'flex',
                gap: 1,
                justifyContent: { md: 'flex-end' },
                color: 'text.primary',
              }}
            >
              <ThemeToggle />
              <IconButton color='inherit'>
                <ShoppingCart color='inherit' />
              </IconButton>
              <IconButton
                sx={{ display: { md: 'none' } }}
                color='inherit'
                aria-label='Open Drawer'
              >
                <MenuIcon color='inherit' />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>
      <Drawer anchor='right' open='true'></Drawer> */}
    </>
  );
}

// return (
//   <StyledAppBar title='Farmland' elevation={0} position='relative'>
//     <Container disableGutters={true}>
//       <Toolbar>
//         {/* Left Section */}
//         <div>
//           <Link component={RouterLink} to='/'>
//             <Box
//               component='img'
//               sx={{
//                 maxHeight: { xs: 70 },
//                 maxWidth: { xs: '100%' },
//               }}
//               alt='Logo'
//               src={logo}
//             />
//           </Link>
//         </div>

//         {/* center div */}
//         <Container>
//           <Box
//             component='div'
//             sx={{
//               display: { xs: 'none', md: 'flex' },
//               justifyContent: 'center',
//             }}
//           >
//             <Link
//               component={RouterLink}
//               to='/'
//               sx={{ color: 'text.primary' }}
//             >
//               <Typography variant='h6' gutterBottom component='div'>
//                 h6. Heading
//               </Typography>
//             </Link>
//           </Box>
//         </Container>

//         {/* Right Section */}
//         <Box
//           component='div'
//           sx={{ flex: '0 0 20%', display: 'flex', gap: 0.5 }}
//         >
//           <ThemeToggle />
//           <IconButton>
//             <ShoppingCart />
//           </IconButton>
//           <IconButton sx={{ display: { sm: 'block', lg: 'md' } }}>
//             <MenuIcon />
//           </IconButton>
//         </Box>
//       </Toolbar>
//     </Container>
//   </StyledAppBar>
// );

// https://stackoverflow.com/questions/68471759/when-migrating-to-material-ui-v5-how-to-deal-with-conditional-classes/68472931#68472931

// https://stackoverflow.com/questions/69500357/how-to-implement-conditional-styles-in-mui-v5-sx-prop
