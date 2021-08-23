import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
    marginTop: -10,
    position:'relative',
    zIndex:1,
  },
}));

export default useStyles;
