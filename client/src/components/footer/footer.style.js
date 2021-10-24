import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '1rem',
    alignContent: 'flex-start',
    '& a, & p': {
      display: 'block',
      color: theme.palette.type === 'light' ? '#1c1d1d' : '#9fb777 ',
      textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {},
  },
}));

export default useStyles;
