import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'absolute',
    marginTop: '.5rem',
    // bottom: '0',
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  hidden: {
    visibility: 'none',
  },
}));

export default useStyles;
