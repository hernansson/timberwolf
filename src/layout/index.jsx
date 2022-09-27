import React from 'react';
import { Box } from '@mui/material';
import NavBar from './NavBar';

export const Layout = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Box sx={{ width: '100%', position: 'fixed', top: '0' }}>
          <NavBar />
        </Box>
        <Box sx={{ maxWidth: '1440px', width: '80%' }}>{children}</Box>
      </Box>
    </>
  );
};
