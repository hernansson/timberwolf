import React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import NavBar from './NavBar';

export const Layout = ({ children }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Box sx={{ width: '100%', position: 'sticky', top: 0, zIndex: 999 }}>
          <NavBar />
        </Box>
        <Box
          sx={{
            maxWidth: '1440px',
            width: '80%',
            marginTop: isMd ? '40px' : '80px',
            marginBottom: isMd ? '40px' : '80px',
          }}>
          {children}
        </Box>
      </Box>
    </>
  );
};
