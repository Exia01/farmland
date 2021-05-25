
// Material UI
import Typography from '@material-ui/core/Typography';

function LoginButton() {

  function onClickHandler() {
    console.log('works');
  }

  return (
    <Typography variant='button' onClick={onClickHandler}>
      Login
    </Typography>
  );
}

export default LoginButton;
