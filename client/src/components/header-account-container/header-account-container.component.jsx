import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth.context';
import { Link } from 'react-router-dom';

// Components
import LoginButton from '../login-button/login-button.component';

// Material Ui
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  popupMenuWrapper: {
    '& a': {
      color: theme.palette.text.primary,
      textDecoration: 'none',
    },
  },
  wrapper: {
    padding: '12px',
    display: 'none',
    borderRadius: '50%',
    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  linkBtn: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: '0.875rem',
    lineHeight: '24px',
  },
  hidden: {},
}));
export default function HeaderAccountContainer() {
  const classes = useStyles();

  const [accountMenuState, setAccountMenuState] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const { isAuthenticated } = useContext(AuthContext);

  const onClickHandler = (event) => {
    setAnchorEl(event.currentTarget);
    setAccountMenuState(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAccountMenuState(false);
  };

  if (!isAuthenticated()) {
    return (
      <Typography variant='body1' className={classes.wrapper}>
        <Link to='/Login' className={classes.linkBtn}>
          Login
        </Link>
      </Typography>
    );
  }

  return (
    <>
      {' '}
      <IconButton
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={onClickHandler}
        color='inherit'
        className={classes.wrapper}
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorEl}
        // anchorOrigin={{
        //   vertical: 'top',
        //   horizontal: 'right',
        // }}
        keepMounted
        // transformOrigin={{
        //   vertical: 'top',
        //   horizontal: 'right',
        // }}
        open={accountMenuState}
        onClose={handleClose}
        className={classes.popupMenuWrapper}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to='/account'>My Account</Link>
        </MenuItem>
      </Menu>
    </>
  );
}
