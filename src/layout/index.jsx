import React from 'react';
import { Box } from '@mui/material';

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
        <Box></Box>
        <Box sx={{ maxWidth: '1440px', width: '80%' }}>{children}</Box>
      </Box>
    </>
  );
};
