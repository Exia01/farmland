import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '1rem 0',
    display: 'flex',
    flexFlow: 'wrap',
    alignItems: 'stretch',
    [theme.breakpoints.down('sm')]: {
      gap: '1rem',
      justifyContent: 'center',
    },
    // '& .MuiPaper-root.MuiCard-root': {
    //   height: '100%',
    // },
  },
}));

export default useStyles;
