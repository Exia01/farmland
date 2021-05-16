import { useAuth0 } from '@auth0/auth0-react';


// Material UI
import {Typography } from '@material-ui/core';

const LogoutButton = (props) => {
  const { logout } = useAuth0();
  const onClickHandler = (e) => {
    logout({ returnTo: window.location.origin });
  };
  return (
    <Typography variant='button' onClick={onClickHandler}>
      Log Out
    </Typography>
  );
};

export default LogoutButton;
// const LogoutButton = ({ className, props }) => {
// className={`${className}`}
