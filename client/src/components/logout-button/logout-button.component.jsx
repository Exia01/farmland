import { useContext } from 'react';
import { AuthDispatchContext } from '../../contexts/auth.context';
// Material UI
import { Button, Typography } from '@material-ui/core';

const LogoutButton = (props) => {
  const dispatch = useContext(AuthDispatchContext);

  const onClickHandler = (e) => {
    dispatch({ type: 'LOGOUT' });
  };

  let btnTag = (
    <Typography variant='button' onClick={onClickHandler}>
      Log Out
    </Typography>
  );

  if (props.accountBtn) {
    btnTag = (
      <Button variant='outlined' onClick={onClickHandler}>
        Log Out
      </Button>
    );
  }

  return btnTag;
};

export default LogoutButton;
// const LogoutButton = ({ className, props }) => {
// className={`${className}`}
