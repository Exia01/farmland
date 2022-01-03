import { useContext, useState } from 'react';
import { AuthContext } from '../../../context/Auth';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

// MUI
import {
  Typography,
  Link,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function AuthContainer() {
  let navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  let isAuth = isAuthenticated();

  function handleMenuClick(e) {
    setAnchorEl(e.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  function onButtonClickHandler() {
    navigate('./login');
  }

  function onIconClickHandler() {}

  if (!isAuthenticated()) {
    return (
      <Button
        variant='text'
        sx={{ color: 'text.primary' }}
        onClick={onButtonClickHandler}
      >
        Login
      </Button>
    );
  }

  return (
    <>
      <div>
        <IconButton
          size='large'
          aria-label={isAuth ? 'account of current user menu' : 'undefined'}
          aria-controls='account-menu-appbar'
          aria-haspopup='true'
          onClick={handleMenuClick}
          sx={{ color: 'text.primary' }}
        >
          <AccountCircleIcon />
        </IconButton>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          // Below disables adding padding
          disableScrollLock={true}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              component={RouterLink}
              underline='none'
              color={'inherit'}
              to='/account'
            >
              My Account
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </>
  );
}
