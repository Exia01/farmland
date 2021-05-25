import clsx from 'clsx';
import { useState } from 'react';

//Components
import LoadingAnimation from '../loading-animation/loading-animation.component';
import LoginButton from '../login-button/login-button.component';
import LogoutButton from '../logout-button/logout-button.component';

// Jss - Material Ui
import useStyles from './auth-container-styles';
import { Typography } from '@material-ui/core';

export default function AuthContainer(props) {
  const classes = useStyles();


  
  // //  To be replaced with whatever service
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


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
