import { Box, Typography } from '@mui/material';
import React from 'react';

export const OfferBanner = () => {
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
        <Typography fontWeight={700} fontSize={'24px'} color={'text.primary'}>
          OFERTAS
        </Typography>
        <Box>
          <Typography fontSize={'12px'} color={'text.primary'}>
            Estás a 1 click de ofertar y llevarte uno de los 10 NFTS que incluye
            beneficios que no te querrás perder.
          </Typography>
          <Typography fontSize={'12px'} color={'text.primary'}>
            Elije el o los NFT`S que más te gusten, oferta en COP y vive una de
            las mejores experiencias de tu vida
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
