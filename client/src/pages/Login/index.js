import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import { AuthDispatchContext } from './../../context/Auth/index';
import ThemeToggle from '../../components/ThemeToggle';
import { useNavigate } from 'react-router-dom';

// Logo
import logo from '../../uploads/images/icons/farmlandLogo3.png';

// MUI
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Container,
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Button,
  Grid,
  Link,
  Checkbox,
  Paper,
  GlobalStyles,
  Card,
  Divider,
} from '@mui/material';

export default function Login() {
  let navigate = useNavigate();
  const [isMounted, setIsMounted] = useState();
  const [loginError, setLoginError] = useState('');
  const dispatch = useContext(AuthDispatchContext);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordCheck: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });
  const [redirectOnLogin, setRedirectOnLogin] = useState(false);

  const isEmail = (val) => {
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    if (!pattern.test(val)) {
      return false;
    }
    return true;
  };
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    setFormErrors({
      email: '',
      password: '',
    });

    let formIsValid = true;

    const { email, password } = formData;

    setLoginError(null);
    const formErrors = {
      email: '',
      password: '',
    };

    const validEmail = isEmail(email);
    if (!validEmail) {
      formErrors.email = 'Enter a valid email';
      formIsValid = false;
    }

    if (formErrors.password === '' && password.length <= 5) {
      formErrors.password = 'Enter a password';
      formIsValid = false;
    }

    if (!formIsValid) {
      setFormErrors(formErrors);
      return;
    }

    try {
      //could implement a loading
      const { data } = await axios.post('/v1/auth/login', formData);

      dispatch({ type: 'LOGIN', payload: data });

      //could set timeout for message to be displayed before redirecting
      navigate('/');
    } catch (err) {
      // console.log('Error', err.response);
      console.log('Error', err);
      if (err.response.status === 404) {
        setLoginError('There was an error with your request.');
        return;
      }
      setLoginError(err.response.data.msg);
      //reset successful login message
    }
  };

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, [formData, formErrors]);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const data = new FormData(e.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // }

  //Copyright Func
  function Copyright(props) {
    return (
      <Typography
        variant='body2'
        color='text.secondary'
        align='center'
        {...props}
      >
        {'Copyright © '}
        <Link color='inherit' to='/' component={RouterLink}>
          Farmland
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const { email, password } = formData;
  return (
    <Paper elevation={0} sx={{ borderRadius: 0, paddingTop: 14 }}>
      {' '}
      <Container component='main' maxWidth='sm'>
        <Box
          sx={{
            '& img': {
              maxWidth: '120px',
            },
            display: 'flex',
            justifyContent: 'center',
            margin: 'auto',
            paddingBottom: 3,
          }}
        >
          <Link to='/' component={RouterLink}>
            <img src={logo} alt='Logo' />
          </Link>
        </Box>

        <GlobalStyles
          styles={{
            'html, body, #root, .app': { height: '100%' },
            'div.app > div.MuiPaper-root': { height: '100%' },
            'header.MuiPaper-root, div.MuiBottomNavigation-root ': {
              display: 'none',
            },
          }}
        />
        {/* marginTop: 12,  */}
        <Card sx={{ padding: 4, borderRadius: 2 }}>
          <Box
            sx={{
              //   marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              //   justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '& > div:nth-of-type(1)': {
                  flex: 1,
                },
                '& > div:nth-of-type(2)': {
                  flex: '0 auto',
                },
              }}
            >
              <div>
                <Typography variant='h5'>
                  {/* component='h1'  */}
                  Login
                </Typography>
              </div>
              <div>
                <ThemeToggle />
              </div>
            </Box>
            {loginError !== '' && (
              <Typography
                variant='body1'
                component='p'
                sx={{ color: 'error.main' }}
              >
                {loginError}
              </Typography>
            )}
            <Box
              component='form'
              onSubmit={onSubmitHandler}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin='normal'
                fullWidth
                // required
                id='email'
                label='Email'
                name='email'
                autoComplete='email'
                type='email'
                value={email}
                autoFocus
                onChange={onChangeHandler}
                helperText={formErrors.email}
                error={formErrors.email !== ''}
              />
              <TextField
                id='password'
                margin='normal'
                fullWidth
                name='password'
                label='Password'
                type='password'
                value={password}
                autoComplete='current-password'
                onChange={onChangeHandler}
                helperText={formErrors.password}
                error={formErrors.password !== ''}
              />
              {/* <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              /> */}
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Divider sx={{ color: 'neutral.main', margin: '0 0 .5rem 0' }} />
              <Grid container>
                {/* <Grid item xs>
                  <Link href='#' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link to='/register' variant='body2' component={RouterLink}>
                    {"Don't have an account? - Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Card>
        <Copyright sx={{ mt: 4, mb: 4 }} />
      </Container>
    </Paper>
  );
}
