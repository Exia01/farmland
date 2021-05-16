import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from '../../utils/constants';
const drawerWidth = DRAWER_WIDTH; //using constant
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& div div': {
      flex: '0 auto',
      
    },
  },
  title: {
    flexGrow: 1,
    color: theme.palette.light ? 'Black' : 'White',
    textDecoration: 'none',
    '&hover': {
      cursor: 'pointer',
    },
  },
  menuButton: {
    // marginRight: theme.spacing(2),
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  dynamicIcon: {},

  //drawer
  drawer: {
    width: '60%',
  },
  drawerPaper: {
    width: '60%',
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
