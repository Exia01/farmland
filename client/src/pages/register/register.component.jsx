import { useState } from 'react';
import { Link } from 'react-router-dom';

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

  const [formData, setFormData] = useState({
    name:'',
    email: '',
    password: '',
    passwordCheck: '',
  });

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      alert('works');
    } catch (err) {
      console.log(err);
    }
  };

  const inputList = [
    {
      id: 'name',
      label: 'Name',
      name: 'name',
      autoComplete: true,
      autocompleteText: 'name',
      type: 'text',
    },
    {
      id: 'email',
      label: 'Email',
      name: 'email',
      autoComplete: false,
      type: 'email',
      //include the onChangeHandler
    },
    {
      id: 'password',
      label: 'password',
      name: 'password',
      autoComplete: true,
      autocompleteText: 'current-password',
      type: 'password',
    },
    {
      id: 'passwordCheck',
      label: 'Confirm Password',
      name: 'passwordCheck',
      autoComplete: false,
      type: 'password',
    },
  ];

  return (
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
                  label='Name'
                  name='name'
                  autoComplete='name'
                  type='text'
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
                  onChange={onChangeHandler}
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
                  onChange={onChangeHandler}
                />
                <TextField
                  variant='outlined'
                  margin='normal'
                  fullWidth
                  id='passwordCheck'
                  label='Confirm Password'
                  name='passwordCheck'
                  type='password'
                  onChange={onChangeHandler}
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
            <Link to='/login'>Have an account?</Link>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
}
