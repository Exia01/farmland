import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    bottom: '0px',
    right: '0px',
    left: '0px',
    width: '100%',
    zIndex: 20,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  hidden: {
    visibility: 'none',
  },
}));

export default useStyles;
