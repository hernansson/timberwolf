import {
  Box,
  CardMedia,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import { styles } from '../styles';
import Logo from '../../assets/img/landing/brand.svg';
import { NavBarDrawer } from './NavBarDrawer';
import { DesktopMenu } from './DesktopMenu';

const NavBar = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box sx={styles.navBar}>
      <Box>
        <CardMedia component={'img'} src={Logo} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        {isMd ? <NavBarDrawer /> : <DesktopMenu />}
      </Box>
    </Box>
  );
};

export default NavBar;
