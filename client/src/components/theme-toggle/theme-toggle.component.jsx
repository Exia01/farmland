import { useContext } from 'react';
import { SetContext, ThemeContext } from '../../contexts/theme.context';
import { toggleTheme } from '../../reducer/themeReducer';
import clsx from 'clsx';

// Material Ui components
import { IconButton } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

//Styles
import useStyles from './theme-toggle.styles';

export default function ThemeToggle() {
  const { palette } = useContext(ThemeContext);
  const dispatch = useContext(SetContext);

  function onClickHandler() {
    dispatch(toggleTheme(palette));
  }

  const classes = useStyles();

  const iconTag =
    palette.type === 'dark' ? (
      <Brightness7Icon />
    ) : (
      <Brightness4Icon
        className={clsx(classes.themeIcon, {
          [classes.lightColorFont]: palette.type === 'light', // classes.drawerOpen is applied always, bool = true
        })}
      />
    );

  const ariaLabel =
    palette.type === 'dark' ? 'dark icon theme' : 'light icon theme';

  return (
    <IconButton aria-label={ariaLabel} onClick={onClickHandler}>
      {iconTag}
    </IconButton>
  );
}
