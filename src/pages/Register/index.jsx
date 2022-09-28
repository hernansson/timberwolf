import React from 'react';
import { BrandContent } from './components/BrandContent';
import { RegisterContainer } from './components/RegisterContainer';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import Background from '../../assets/img/landing/background.png';
import { styles } from './components/styles';

export const Register = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  document.body.style = `background-image: url(${Background});background-size:cover;background-repeat:no-repeat;background-attachment:fixed`;
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: isMd ? 'calc(100vh)' : 'calc(100vh - 240px)',
      }}>
      <Box sx={styles.mainContainer}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={styles.content}>
            <Box
              sx={{
                width: { xs: '100%', md: '50%' },
              }}>
              <BrandContent />
            </Box>
            <Box sx={{ width: { xs: '100%', md: '50%' } }}>
              <RegisterContainer />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
