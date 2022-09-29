import React from 'react';
import { Box, Typography } from '@mui/material';
export const DoubtsBanner = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          'url(https://images.cdn2.stockunlimited.net/preview1300/dark-web-banner-design_1945948.jpg)',
        backgroundPosition: 'contain',
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
        <Box sx={{ width: { xs: '100%', md: '30%' } }}>
          <Typography
            alignSelf={'center'}
            fontWeight={700}
            fontSize={'24px'}
            color={'text.primary'}
            noWrap>
            Tienes Dudas
          </Typography>
        </Box>
        <Box sx={{ width: { xs: '100%', md: '70%' } }}>
          <Typography fontSize={'12px'} color={'text.primary'}>
            Lo sabemos, no es un tema del que hablemos todos los días, pero no
            te preocupes, aquí te dejamos las preguntas frecuentes relacionadas
            con Los NFTS y subastas digitales. Leer Más..
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
