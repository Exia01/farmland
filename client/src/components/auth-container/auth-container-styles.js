import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '&:hover': {
      cursor: 'pointer',
    },
    '& span': {
      textTransform: 'none',
    },
  },
  navMenu: {
    borderRadius: '50%',
    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    padding: '12px',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
}));

export default useStyles;
