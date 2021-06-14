import { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AuthDispatchContext } from '../../contexts/auth.context';
import axios from 'axios';

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

import useStyles from './register.styles';
import ThemeToggle from '../../components/theme-toggle/theme-toggle.component';

export default function Register() {
  const classes = useStyles();
  const dispatch = useContext(AuthDispatchContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordCheck: '',
  });

  const [formErrors, setformErrors] = useState({
    name: '',
    email: '',
    password: '',
    passwordCheck: '',
  });

  const [apiMessage, setapiMessage] = useState('');

  const [redirectOnLogin, setRedirectOnLogin] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

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

    setformErrors({
      name: '',
      email: '',
      password: '',
      passwordCheck: '',
    });

    let formIsValid = true;

    const { name, email, password, passwordCheck } = formData;

    const formErrors = {
      name: '',
      email: '',
      password: '',
      passwordCheck: '',
    };

    const validEmail = isEmail(email);
    if (!validEmail) {
      formErrors.email = 'Email field is invalid';
      formIsValid = false;
    }

    if (password !== passwordCheck) {
      formErrors.password = 'Passwords do not Match';
      formErrors.passwordCheck = 'Passwords do not Match';
      formIsValid = false;
    }

    if (formErrors.password === '' && password.length <= 5) {
      formErrors.password = 'Passwords length is at least 5 characters';
      formIsValid = false;
    }

    if (!formIsValid) {
      setformErrors(formErrors);
      return;
    }

    try {
      //could implement a loading
      const { data } = await axios.post('/v1/user', formData);

      dispatch({ type: 'LOGIN', payload: data });
      setFormData({ name: '', email: '', password: '', passwordCheck: '' });
      setformErrors({
        name: '',
        email: '',
        password: '',
        passwordCheck: '',
      });
      setRedirectOnLogin(true);
    } catch (err) {
      console.log(err.msg);
      //can set errors to display on client if needed
    }
  };

  const { name, email, password, passwordCheck } = formData;

  return (
    <>
      {redirectOnLogin && <Redirect to='/dashboard' />}

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
                    Register
                  </Typography>
                  <Typography variant='body2' component='p'>
                    Keep track or previous orders
                  </Typography>

                  {apiMessage && (
                    <Typography
                      variant='body2'
                      component='p'
                      className={classes.formErrors}
                    >
                      {apiMessage}
                    </Typography>
                  )}
                </div>
                <div className={classes.formHeaderLogo}>
                  {/* <img src={logo} alt='Logo' /> */}
                  <ThemeToggle />
                </div>
              </div>
              <div className={classes.formContainer}>
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
                    id='name'
                    label='Name (optional)'
                    name='name'
                    autoComplete='name'
                    type='text'
                    value={name}
                    autoFocus
                    onChange={onChangeHandler}
                  />

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

                  <TextField
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    id='passwordCheck'
                    label='Confirm Password'
                    name='passwordCheck'
                    type='password'
                    value={passwordCheck}
                    onChange={onChangeHandler}
                    helperText={formErrors.passwordCheck}
                    error={formErrors.passwordCheck !== ''}
                  />

                  <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                    className={classes.submitBtn}
                    // disabled={formIsValid !== true}
                  >
                    Sign In
                  </Button>
                </form>
              </div>
              <hr className={classes.divider} />
              <Link to='/login'>Already have an account?</Link>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </>
  );
}
