import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '1rem 0',
    display: 'flex',
    // gap: '1rem',
    flexFlow: 'wrap',
    alignItems: 'stretch',
    '& .MuiPaper-root.MuiCard-root': {
      height: '100%',
    },
  },
}));

export default useStyles;
