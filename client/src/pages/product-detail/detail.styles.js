import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    margin: '1rem auto',
  },
  productImage: {
    maxHeight: 500,
    width: '100%',
    objectFit: 'contain',
  },
  sideCol: {},
  hrDivider: { margin: '1rem 0' },
  sizeOptsWrapper: {
    '& .span-container': {
      // flex: '0 0 auto',
      marginBottom: theme.spacing(1),
      fontWeight: 'bold',
    },
  },
  btnVariantWrapper: {
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing(2),
    },
  },
  btnSizeVariant: {
    '&:not(:last-child)': {
      marginRight: theme.spacing(1),
    },
    [theme.breakpoints.up('xs')]: {
      marginBottom: theme.spacing(1),
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: 0,
    },
  },
  btnSpacer: { marginBottom: theme.spacing(1) },
  qtyWrapper: {
    marginBottom: theme.spacing(2),
  },
  qtyBtn: {
    fontSize: '1.1rem',
    '&:not(:last-child)': {
      // borderRight: `${theme.palette.secondary.main} 1px solid `,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    '&:not(:first-child)': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  },
  qtyInput: {
    // flex: '0 0 30px',
    fontSize: '1.1rem',
    width: '50px',
    textAlign: 'center',
    border: `${theme.palette.secondary.main} 1px solid `,
    outline: 'none',
    '& hover': {},
  },

  btnSpace: {
    marginBottom: theme.spacing(2),
  },
  spacer: {},
}));

export default useStyles;
