import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '1rem 0',
  },
  gridContainer: {
    // gridTemplateColumns: '1fr',
  },
  item: {
    display: 'flex',
    flexFlow: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    '& h6': {
      flex: '100%',
      textAlign: 'center',
    },
  },
  itemImage: {
    flex: '0 0 auto',
    maxWidth: '150px',
  },
}));

export default useStyles;
