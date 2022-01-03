import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const drawerWidth = 250;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function MobileDrawer({ open, handleDrawerClose }) {
  let navigate = useNavigate();

  const itemsList = [
    {
      text: 'Shop Online',
      icon: <StorefrontIcon />,
      onClick: () => {
        navigate('../products');
        handleDrawerClose();
      },
    },
    {
      text: 'Contact Us',
      icon: <StorefrontIcon />,
      onClick: () => {
        navigate('../products', { push: true });
        handleDrawerClose();
      },
    },
    {
      text: 'Cart',
      icon: <ShoppingCartIcon />,
      onClick: () => {
        navigate('../products', { push: true });
        handleDrawerClose();
      },
    },
  ];
  return (
    <Drawer
      sx={{
        backgroundColor: 'neutral.main',
        // width: drawerWidth,
        // flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      anchor='right'
      onClose={handleDrawerClose}
      open={open}
      elevation={0}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider sx={{ color: 'divider.main', borderBottomWidth: '2px' }} />

      <List>
        {itemsList.map((item, index) => {
          const { text, onClick: onClickFunc, icon } = item;
          return (
            <ListItem button key={text} onClick={onClickFunc}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
      <Divider sx={{ color: 'divider.main' }} />
    </Drawer>
  );
}
