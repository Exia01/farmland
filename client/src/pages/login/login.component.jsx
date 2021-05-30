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

import useStyles from './login.styles';
import ThemeToggle from '../../components/theme-toggle/theme-toggle.component';

export default function Login() {
  const [formData, setFormData] = useState({
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

  const classes = useStyles();

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
                  Login
                </Typography>
                <Typography variant='body2' component='p'>
                  Access your order history
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
                  fullWidth
                  id='email'
                  label='Email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  autoFocus
                  onChange={onChangeHandler}
                />
                <TextField
                  variant='outlined'
                  margin='normal'
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
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
  );
}
