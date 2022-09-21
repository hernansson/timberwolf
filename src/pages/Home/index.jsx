import React from 'react';
import { HStack } from '../../components/common';
import { BrandContent } from './components/BrandContent';
import { RegisterContainer } from './components/RegisterContainer';
import { Box, CardMedia, Typography } from '@mui/material';
import TimberWolf from '../../assets/img/landing/timberwolf.png';
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
        <HStack sx={{ justifyContent: { xs: 'center', md: 'flex-end' } }}>
          <Box sx={{ width: { xs: '32%', md: '16%' } }}>
            <CardMedia
              component={'img'}
              src={TimberWolf}
              sx={{ objectFit: 'contain' }}
            />
          </Box>
        </HStack>
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
        <Typography
          fontWeight={700}
          fontSize={'10.65px'}
          color={'text.primary'}>
          NFT / COLECTION
        </Typography>
      </Box>
    </Box>
  );
};
