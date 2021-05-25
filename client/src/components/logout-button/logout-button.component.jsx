// Material UI
import { Typography } from '@material-ui/core';

const LogoutButton = (props) => {
  const onClickHandler = (e) => {
    console.log('Works!');
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
