import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  '@global': {
    // anything defined inside here will not get unique prefixes. Stays global css meaning unchanged
    '.header-container': {
      display: 'none',
    },
    // body: {
    //   backgroundColor: theme.palette.type === 'light' ? 'white' : '#424242 ',
    // },
    'body, html, div#root, .App, .App > div': {
      height: '100%',
      backgroundColor: theme.palette.type === 'light' ? 'inherit' : '#353535 ',
    },
  },

  root: {
    padding: '80px 16px',
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
    },
    '& a:hover': {
      textDecoration: 'underline',
    },
  },
  // #353535
  linkLogo: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '64px',
    '& img': {
      maxWidth: '150px',
    },
  },
  cardContainer: {
    borderRadius: '16px',
    // // backgroundColor: theme.palette.type === 'light' ? 'inherit' : '#353535 ',
  },
  formHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '24px',
    '& button': {
      color: theme.palette.type === 'light' ? 'inherit' : 'inherit ',
    },
  },
  formTitle: {},
  formErrors: {},
  formHeaderLogo: {
    height: 'auto',
    maxHeight: '50px',
    width: '50px',
    '& img': {
      maxHeight: '100%',
      width: '100%',
    },
  },
  formContainer: {
    display: 'flex',
    flexFlow: 'column',
    marginTop: '24px',
    '& .Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {},
    },
  },
  registerError: {
    color: theme.palette.error.main,
    fontWeight: 'bold',
  },
  submitBtn: {
    marginTop: '16px',
    padding: '.5rem',
  },
  divider: {
    margin: '24px 0px',
    borderWidth: '0px 0px thin',
    borderStyle: 'solid',
    borderColor: 'rgba(145, 158, 171, 0.24) ',
  },
}));

export default useStyles;
