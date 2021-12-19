import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function NavigationFooter() {
  const [value, setValue] = useState(0);
  let location = useLocation();
  const [pathMap, setPathMap] = useState([
    '/',
    '/products',
    '/login',
    '/account',
    '/register',
  ]);
  const [pathMapObj, setPathMapObj] = useState({
    '/': 0,
    '/products': 1,
    // 'cart',
    '/login': 2,
    '/account': 2,
    '/register': 2,
  });
  const onChangeHandler = (e, val) => {
    if (value > -1) {
      setValue(val);
    }
  };

  useEffect(() => {
    function setValuePathMap() {
      const { pathname } = location;
      const value = pathMapObj[pathname.toLowerCase()];
      console.log(value);
      if (value > -1) {
        setValue(value);
      }
    }
    setValuePathMap();
    return () => {};
  }, [value, pathMap, pathMapObj]);

  return (
    <Box sx={{}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label='Home' icon={<HomeIcon />} />
        <BottomNavigationAction label='Shop' icon={<ShoppingBasketIcon />} />
        <BottomNavigationAction label='Login' icon={<AccountCircleIcon />} />
      </BottomNavigation>
    </Box>
  );
}
