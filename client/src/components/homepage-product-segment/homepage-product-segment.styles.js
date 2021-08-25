import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '32px 0',
    padding: '1rem 0',
  },
  sectionBorder: {},
  titleBtnLink: {
    padding: '1rem 0',
  },
  titleHeader: {
    // background:'red',
    [theme.breakpoints.up('sm')]: {
      flex: '0 0 auto',
    },
  },
  btnLink: {
    [theme.breakpoints.up('sm')]: {
      flex: '0 0 auto',
    },
  },
}));

export default useStyles;
