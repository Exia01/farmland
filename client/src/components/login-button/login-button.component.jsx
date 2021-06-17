// Material UI
import Typography from '@material-ui/core/Typography';
import { Link, useHistory } from 'react-router-dom';

function LoginButton() {
  const history = useHistory();
  function onClickHandler() {
    history.push('/login');
  }

  return (
    <Typography variant='button' onClick={onClickHandler}>
      Login
    </Typography>
  );
}

export default LoginButton;
