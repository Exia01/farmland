import { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { AuthDispatchContext } from '../../contexts/auth.context';

// Logo
import logo from '../../uploads/images/icons/farmlandLogo3.png';

import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';

import useStyles from './login.styles';
import ThemeToggle from '../../components/theme-toggle/theme-toggle.component';

export default function Login() {
  const classes = useStyles();
  const dispatch = useContext(AuthDispatchContext);
  const [isMounted, setIsMounted] = useState();
  const [loginError, setLoginError] = useState('');

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
      const { data } = await axios.post('/v1/user/login', formData);

      dispatch({ type: 'LOGIN', payload: data });

      //could set timeout for message to be displayed before redirecting
      setRedirectOnLogin(true);
    } catch (err) {
      // console.log('Error', err.response);
      console.log('Error', err);
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

  const { email, password } = formData;
  return (
    <>
      {redirectOnLogin && <Redirect to='/' />}
      <Container maxWidth={'sm'}>
        <Grid container justify='center' className={classes.root}>
          <div className={classes.linkLogo}>
            <Link to='/'>
              <img src={logo} alt='Logo' />
            </Link>
          </div>

          <Card className={classes.cardContainer}>
            <CardContent>
              <div className={classes.formHeader}>
                <div className={classes.formTitle}>
                  <Typography variant='h4' component='h4' gutterBottom={true}>
                    Login
                  </Typography>
                  <Typography variant='body2' component='p'>
                    Access your order history
                  </Typography>
                </div>
                <div className={classes.formHeaderLogo}>
                  <ThemeToggle />
                </div>
              </div>
              <div className={classes.formContainer}>
                {loginError && (
                  <Typography
                    variant='body1'
                    component='p'
                    className={classes.loginError}
                  >
                    {loginError}
                  </Typography>
                )}
                <form
                  className={classes.form}
                  noValidate
                  onSubmit={onSubmitHandler}
                >
                  <TextField
                    variant='outlined'
                    margin='normal'
                    // required
                    fullWidth
                    id='email'
                    label='email'
                    name='email'
                    autoComplete='email'
                    type='email'
                    autoFocus
                    value={email}
                    onChange={onChangeHandler}
                    helperText={formErrors.email}
                    error={formErrors.email !== ''}
                  />

                  <TextField
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    id='password'
                    label='Password'
                    name='password'
                    autoComplete='current-password'
                    type='password'
                    value={password}
                    onChange={onChangeHandler}
                    helperText={formErrors.password}
                    error={formErrors.password !== ''}
                  />

                  <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                    className={classes.submitBtn}
                  >
                    Sign In
                  </Button>
                </form>
              </div>
              <hr className={classes.divider} />
              <Link to='/register'>Create new account</Link>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </>
  );
}
