import React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import NavBar from './NavBar';
import { Footer } from './Footer';
import { TosModal } from '../pages/Register/components/TosModal';
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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: 'calc(100vh - 80px)',
            width: '-webkit-fill-available',
          }}>
          <Box></Box>
          <Box
            sx={{
              marginTop: isMd ? '40px' : '80px',
            }}>
            {children}
          </Box>
          <Footer />
        </Box>
      </Box>
      <TosModal />
    </>
  );
};
