import { useAuth0 } from '@auth0/auth0-react';
import clsx from 'clsx';

//Components
import LoadingAnimation from '../loading-animation/loading-animation.component';
import LoginButton from '../login-button/login-button.component';
import LogoutButton from '../logout-button/logout-button.component';

// Jss - Material Ui
import useStyles from './auth-container-styles';
import { Typography } from '@material-ui/core';

export default function AuthContainer(props) {
  const classes = useStyles();

  const { isAuthenticated, isLoading } = useAuth0();

  const authContainerClasses = clsx({
    [classes.root]: true, //always applies
    [classes.navMenu]: props.navIcon, //only when open === true
  });

  const buttonTag = isAuthenticated ? <LogoutButton /> : <LoginButton />;

  //NEED TO ADD CLX to this
  //   look into having the border radius
  //   add hover effect

  return (
    <Typography variant='body1' className={authContainerClasses}>
      {isLoading && <LoadingAnimation />}
      {!isLoading && buttonTag}
    </Typography>
  );
}
