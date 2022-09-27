import React from 'react';
import { BrandContent } from './components/BrandContent';
import { RegisterContainer } from './components/RegisterContainer';
import { Box } from '@mui/material';
import Background from '../../assets/img/landing/background.png';
import { styles } from './components/styles';

export const Home = () => {
  document.body.style = `background-image: url(${Background});background-size:cover;background-repeat:no-repeat;background-attachment:fixed`;
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
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
