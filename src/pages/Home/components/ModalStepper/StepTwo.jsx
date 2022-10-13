import { CardMedia, Typography, Box } from '@mui/material';
import React from 'react';
import Image from '../../../../assets/img/landing/numero-2.png';
export const StepTwo = () => {
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
        PASO 2
      </Typography>
      <CardMedia
        component={'img'}
        src={Image}
        sx={{ objectFit: 'contain', height: '150px' }}
      />
      <Typography fontWeight={700} color={'text.primary'} textAlign={'center'}>
        Da click en OFERTAR y comienza a participar
      </Typography>
    </Box>
  );
};
