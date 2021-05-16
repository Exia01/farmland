import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from '../../utils/constants';
const drawerWidth = DRAWER_WIDTH; //using constant
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // '& div div': {
    //   flex: '0 auto',
    // },
  },
  title: {
    flex: 0,
    marginRight: 'auto',
    color: theme.palette.light ? 'Black' : 'White',
    textDecoration: 'none',
    '&hover': {
      cursor: 'pointer',
    },
  },
  centerNavLinksContainer: {
    flex: 1,
    justifyContent: 'center',
    '& a': {
      margin: '0 1rem',
      color: 'white',
      fontWeight: 'bold',
      textDecoration: 'none',
      borderRadius: '50%',
      transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      padding: '12px',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },
    },
    display:'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
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
