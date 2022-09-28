import { Box, Typography } from '@mui/material';
import React from 'react';
import { NFTContainer } from './NFTContainer';

export const NFTSection = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Box sx={{ width: { xs: '100%', md: '30%' } }}>
        <Typography fontSize={'24px'} color={'text.primary'} fontWeight={700}>
          ¡Antójate, oferta y gana!
        </Typography>
      </Box>
      <Box sx={{ width: { xs: '100%', md: '50%' }, paddingBottom: '32px' }}>
        <Typography fontSize={'12px'} color={'text.primary'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan
          ullamcorper nunc in ac dis gravida tellus suscipit. Tempus praesent
          diam rhoncus arcu id eget gravida quis viverra. Mattis risus et
          gravida rhoncus morbi id. Ut condimentum.
        </Typography>
      </Box>
      <NFTContainer />
    </Box>
  );
};
