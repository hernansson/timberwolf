import { Box, Typography } from '@mui/material';
import React from 'react';
import { NFTContainer } from './NFTContainer';
import { useAuth } from '../../../../context/authContext';
export const NFTSection = () => {
  const { nftSectionRef } = useAuth();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
      <Box sx={{ width: { xs: '100%', md: '30%' } }}>
        <Typography
          fontSize={'24px'}
          color={'text.primary'}
          fontWeight={700}
          ref={nftSectionRef}>
          ¡Antójate, oferta y gana!
        </Typography>
      </Box>
      <NFTContainer />
    </Box>
  );
};
