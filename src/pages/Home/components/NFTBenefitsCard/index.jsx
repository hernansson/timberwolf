import { Box, CardMedia } from '@mui/material';
import React from 'react';
import { Benefits } from './Benefits';
import { styles } from './style';
import Overlap from '../../../../assets/img/landing/overlap.png';
export const NFTBenefitsCard = () => {
  return (
    <Box sx={styles.mainContainer}>
      <Box sx={{ width: { xs: '100%', md: '50%' } }}>
        <CardMedia
          component={'img'}
          src={Overlap}
          sx={{ borderRadius: '30px' }}
        />
      </Box>
      <Box sx={{ width: { xs: '100%', md: '50%' }, alignSelf: 'center' }}>
        <Benefits />
      </Box>
    </Box>
  );
};
