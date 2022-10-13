import { Box, CardMedia, Typography } from '@mui/material';
import React from 'react';
import Image from '../../../../assets/img/landing/numero-1.png';
export const StepOne = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '300px',
        height: '255px',
      }}>
      <Typography
        fontWeight={700}
        color={'text.primary'}
        sx={{ textDecoration: 'underline' }}>
        PASO 1
      </Typography>
      <CardMedia
        component={'img'}
        src={Image}
        sx={{ objectFit: 'contain', height: '150px' }}
      />
      <Typography fontWeight={700} color={'text.primary'}>
        Elije el NFT que más te guste
      </Typography>
    </Box>
  );
};
