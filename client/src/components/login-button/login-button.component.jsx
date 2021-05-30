
// Material UI
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

function LoginButton() {

  function onClickHandler() {
    console.log('works');
  }

  return (
    <Typography variant='button' onClick={onClickHandler}>
       <Link to="/Login">Login</Link>
    </Typography>
  );
}

export default LoginButton;
