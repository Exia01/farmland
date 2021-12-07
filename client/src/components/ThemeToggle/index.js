import { useContext } from 'react';
import { SetContext, ThemeContext } from '../../context/Theme';
import { toggleTheme } from '../../reducer/Theme';

// mui Ui components
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton } from '@mui/material';

//Styles
// const palette = {
//   type: 'light',
// };

export default function ThemeToggle() {
  const { palette } = useContext(ThemeContext);
  const dispatch = useContext(SetContext);

  function onClickHandler() {
    dispatch(toggleTheme(palette));
  }

  const iconTag =
    palette.mode === 'dark' ? (
      <Brightness7Icon color='inherit' />
    ) : (
      <Brightness4Icon color='inherit' />
    );

  const ariaLabel =
    palette.type === 'dark' ? 'dark icon theme' : 'light icon theme';

  return (
    <IconButton
      aria-label={ariaLabel}
      onClick={onClickHandler}
      sx={{ color: 'text.primary' }}
    >
      {iconTag}
    </IconButton>
  );
}
