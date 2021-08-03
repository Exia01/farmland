import { useContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
// Material Ui
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
//Style imports
import useStyles from './bottom-navigation-footer.styles';
import { AuthContext } from '../../contexts/auth.context';

export default function BottomNavigationFooter() {
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

  const { isAuthenticated } = useContext(AuthContext);

  const onChangeHandler = (e, val) => {
    if (value > -1) {
      setValue(val);
    }
  };

  const classes = useStyles();

  useEffect(() => {
    function setValuePathMap() {
      const { pathname } = location;

      const value = pathMapObj[pathname.toLocaleLowerCase()]
      // console.log(value);
      if (value > -1) {
        setValue(value);
      }
    }
    setValuePathMap();
    return () => {};
  }, [value, location, pathMap]);
  return (
    <BottomNavigation
      value={value}
      // onChange={(event, newValue) => {
      //   if (value > -1) {
      //     setValue(newValue);
      //   }
      // }}
      onChange={onChangeHandler}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label='Home'
        icon={<HomeIcon />}
        component={Link}
        to={pathMap[0]}
      />
      <BottomNavigationAction
        label='Shop'
        icon={<ShoppingBasketIcon />}
        component={Link}
        to={pathMap[1]}
      />

      {isAuthenticated() ? (
        <BottomNavigationAction
          label='My Account'
          icon={<AccountCircleIcon />}
          component={Link}
          to={pathMap[3]}
        />
      ) : (
        <BottomNavigationAction
          label='Login'
          icon={<AccountCircleIcon />}
          component={Link}
          to={pathMap[2]}
        />
      )}
    </BottomNavigation>
  );
}

// Bottom Navigation routing:
// https://stackoverflow.com/questions/48443772/react-material-ui-bottomnavigation-component-routing-issue

// potentially
// https://www.digitalocean.com/community/tutorials/react-keep-react-fast
