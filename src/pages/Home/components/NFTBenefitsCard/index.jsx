import { Box, CardMedia } from '@mui/material';
import React from 'react';
import { Benefits } from './Benefits';
import { styles } from './style';
export const NFTBenefitsCard = () => {
  return (
    <Box sx={styles.mainContainer}>
      <Box sx={{ width: { xs: '100%', md: '50%' } }}>
        <CardMedia
          component={'img'}
          src={
            'https://images-platform.99static.com/keeQBkOWsPZHlN4j0dYR5geXi9E=/0x1:1298x1299/500x500/top/smart/99designs-contests-attachments/136/136125/attachment_136125011'
          }
          sx={{ borderRadius: '30px' }}
        />
      </Box>
      <Box sx={{ width: { xs: '100%', md: '50%' }, alignSelf: 'center' }}>
        <Benefits />
      </Box>
    </Box>
  );
};
