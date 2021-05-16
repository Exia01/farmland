import { useAuth0 } from '@auth0/auth0-react';

// Material UI
import Typography from '@material-ui/core/Typography';

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  function onClickHandler() {
    loginWithRedirect();
  }

  return (
    <Typography variant='button' onClick={onClickHandler}>
      Login
    </Typography>
  );
}

export default LoginButton;
