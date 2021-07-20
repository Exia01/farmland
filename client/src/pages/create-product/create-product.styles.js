import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  spacing: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  topSpacer: {
    marginTop: theme.spacing(2),
  },
  root: {
    padding: theme.spacing(2),
    // marginTop: theme.spacing(2),
  },
  formControl: {
    width: '50%',
  },
  formBtn: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-start',
  },
  apiError: {
    color: theme.palette.error.main,
    fontWeight: 'bold',
  },
}));
export default useStyles;
