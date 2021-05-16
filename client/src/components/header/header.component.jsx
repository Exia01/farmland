import clsx from 'clsx';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

//
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';

// Material UI Icons
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import { useTheme } from '@material-ui/core/styles';

// jss Styles
import useStyles from './header.styles';
import ThemeToggle from '../theme-toggle/theme-toggle.component';
import AuthContainer from '../auth-container/auth-container.component';

export default function Header() {
  let history = useHistory();
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  const itemsList = [
    // {
    //   text: 'Home',
    //   icon: <HomeIcon />,
    //   onClick: () => history.push('/'),
    // },
    {
      text: 'Shop Online',
      icon: <StorefrontIcon />,
      onClick: () => {
        history.push('/shop');
        handleDrawerClose();
      },
    },
    {
      text: 'Cart',
      icon: <ShoppingCartIcon />,
      onClick: () => {
        history.push('/test');
        handleDrawerClose();
      },
    },
    // {
    //   text: 'Login',
    //   icon: <AccountBoxIcon />,
    //   onClick: () => {
    //     history.push('/login');
    //     handleDrawerClose();
    //   },
    // },
  ];

  return (
    <>
      <AppBar position='relative' title='Farmland' elevation={0}>
        <Container type='div' className={classes.root}>
          <Toolbar>
            <Link to='/' className={classes.title}>
              <Typography variant='h6'>FARMLAND</Typography>
            </Link>
            <ThemeToggle />
            <AuthContainer  navIcon={true}/>
            <IconButton aria-label='shopping Cart' color='inherit'>
              <ShoppingCartIcon />
            </IconButton>
            <IconButton
              edge='start'
              className={clsx(classes.menuButton, classes.dynamicIcon)}
              color='inherit'
              aria-label='Open Drawer'
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor={'right'}
        open={open}
        onClose={handleDrawerClose}
        className={classes.drawer}
        // Override or extend the styles applied to the component
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
          <h3>Farmland</h3>
        </div>
        <List>
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {/* {icon && <ListItemIcon>{icon}</ListItemIcon>} */}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}

          <ListItem button>
            <AuthContainer />
          </ListItem>
          {/* <ListItem key='loginNavBtn'>

            <AuthenticationButton MobileIcon='true' />
          </ListItem> */}
        </List>

        <Divider />
      </Drawer>
    </>
  );
}
