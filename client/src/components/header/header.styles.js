import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from '../../utils/constants';
const drawerWidth = DRAWER_WIDTH; //using constant
const useStyles = makeStyles((theme) => ({
  headerBg: {
    background:
      theme.palette.type === 'light'
        ? theme.palette.background.paper
        : '#424242 ',

    // 6-30-21 -Added, can be removed
    borderBottom: '1px solid;',
    borderBottomColor: theme.palette.background.default,
    padding: '8px 0',
    marginBottom: '.5rem',
  },
  root: {
    '& .MuiToolbar-regular': {
      minHeight: '100px',
    },
    flexGrow: 1,
    // '& div div': {
    //   flex: '0 auto',
    // },
    '& a': {
      color: theme.palette.type === 'light' ? '#1c1d1d' : '#9fb777 ',
    },
    '& button': {
      color: theme.palette.type === 'light' ? '#1c1d1d' : '#9fb777 ',
    },
    '& p': {
      color: theme.palette.type === 'light' ? '#1c1d1d' : '#9fb777 ',
    },
  },
  titleContainer: {
    flex: '0 25%',
    marginRight: 'auto',
    '&hover': {
      cursor: 'pointer',
    },
    maxHeight: '65px',
    '& img': {
      maxHeight: '100%',
    },
    '& a': {
      display: 'block',
      // padding: '.5rem',
      height: '25px',
      textDecoration: 'none',
    },
  },

  centerNavLinksContainer: {
    display: 'none',
    flex: 'auto',
    justifyContent: 'center',

    '& a': {
      margin: '0 1rem',
      fontWeight: 'bold',
      textDecoration: 'none',
      borderRadius: '50%',
      transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      padding: '12px',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },

  rightLinksContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: '0 25%',
    '& a': {
      textDecoration: 'none',
    },
  },

  menuButton: {
    // marginRight: theme.spacing(2),
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  //drawer
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
  },
}));

/* [theme.breakpoints.down('sm')]: { //Seems like it works but not implemented like this in the docs
   title: {
     color: 'purple',
   },*/
export default useStyles;
