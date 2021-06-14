// Material UI
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

function LoginButton() {
  function onClickHandler() {}

  return (
    <Typography variant='button'>
      <Link to='/Login'>Login</Link>
    </Typography>
  );
}

export default LoginButton;
