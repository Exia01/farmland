import clsx from 'clsx';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import ThemeToggle from '../theme-toggle/theme-toggle.component';
import AuthContainer from '../auth-container/auth-container.component';

// Logo
import logo from '../../uploads/images/icons/farmlandLogo3.png';
//Material Ui
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';

// Material UI Icons
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import StorefrontIcon from '@material-ui/icons/Storefront';

// jss Styles
import useStyles from './header.styles';

export default function Header(props) {
  let history = useHistory();
  const classes = useStyles(props);

  const [open, setOpen] = useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  const itemsList = [
    {
      text: 'Shop Online',
      icon: <StorefrontIcon />,
      onClick: () => {
        history.push('/products');
        handleDrawerClose();
      },
    },
    {
      text: 'Contact Us',
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
  ];

  return (
    <>
      <AppBar position='relative' title='Farmland' elevation={0} className={classes.headerBg}>
        <Container type='div' className={classes.root}>
          <Toolbar>
            <div className={classes.titleContainer}>
              <Link to='/' className={classes.title}>
                <img src={logo} alt='logo' />

              </Link>
            </div>
            <div className={classes.centerNavLinksContainer}>
              <Link to='/products' className={classes.centerNavLinks}>
                Shop Online
              </Link>
              <Link to='/contact' className={classes.centerNavLinks}>
                Contact Us
              </Link>
            </div>
            <div className={classes.rightLinksContainer}>
              <ThemeToggle />
              <AuthContainer navIcon={true} />
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
            </div>
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
            const { text, onClick } = item;
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
