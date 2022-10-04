import { Box, Typography } from '@mui/material';
import React from 'react';
import banner from '../../../../assets/img/landing/banner_bg.png';
export const OfferBanner = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '120px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        width: '-webkit-fill-available',
      }}>
      <Box
        sx={{
          display: 'flex',
          width: { xs: '100%', md: '60%' },
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '16px', md: '64px' },
        }}>
        <Box>
          <Typography
            fontSize={'36px'}
            color={'text.primary'}
            textAlign={'center'}>
            ¡Ahora sí! Llegó la hora de sacar el sprinter que llevas dentro
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
