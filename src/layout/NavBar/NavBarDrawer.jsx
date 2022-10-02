import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { menu } from './menu';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import LoginIcon from '@mui/icons-material/Login';
export const NavBarDrawer = () => {
  const { setIsOfferActive, nftSectionRef, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <Box
      sx={{
        width: 250,
        height: '100%',
      }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {menu.map((item, index) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              onClick={() => {
                if (item.name === 'Ofertar 🔥') {
                  if (
                    location.pathname === '/' ||
                    location.pathname === '/home'
                  ) {
                    nftSectionRef.current.scrollIntoView({
                      behavior: 'smooth',
                    });
                  } else {
                    setIsOfferActive(true);
                  }
                }
                navigate(item.path);
              }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {!user &&
          ['Ingresar'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => navigate('/login')}>
                <ListItemIcon>{<LoginIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={'right'}>
        <Button onClick={toggleDrawer('right', true)}>
          <MenuIcon sx={{ color: 'white' }} />
        </Button>
        <Drawer
          PaperProps={{
            sx: {
              background:
                'linear-gradient(76.06deg, rgba(234, 233, 233, 0.132) -4.84%, rgba(128, 128, 128, 0.0855) -4.83%)',
              boxShadow: '63px 58px 77px rgba(0, 0, 0, 0.58)',
              backdropFilter: 'blur(49.5px )',
            },
          }}
          anchor={'right'}
          open={state['right']}
          onClose={toggleDrawer('right', false)}>
          {list('right')}
        </Drawer>
      </React.Fragment>
    </div>
  );
};
