import { useContext } from 'react';
import { AuthDispatchContext } from '../../contexts/auth.context';
// Material UI
import { Typography } from '@material-ui/core';

const LogoutButton = (props) => {
  const dispatch = useContext(AuthDispatchContext);

  const onClickHandler = (e) => {
    dispatch({ type: 'LOGOUT' });
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
