import React from 'react';
import { Box, CardMedia, Typography } from '@mui/material';
import BrandLogo from '../../../../assets/img/landing/brand.svg';
export const BrandBanner = () => {
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
          width: { xs: '100%', md: '90%' },
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '16px', md: '64px' },
        }}>
        <Box sx={{ width: { xs: '100%', md: '40%' } }}>
          <CardMedia component={'img'} src={BrandLogo} />
        </Box>
        <Box
          sx={{
            width: { xs: '100%', md: '70%' },
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}>
          <Typography fontSize={'12px'} color={'text.primary'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim libero
            vitae natoque pulvinar sit sit. Vitae consectetur sed consequat nibh
            mi ut blandit lorem nascetur. Fermentum quisque sit quis auctor
            purus. Etiam sed eget.
          </Typography>
          <Typography>
            <Typography
              component={'span'}
              fontWeight={700}
              fontSize={'14px'}
              color={'text.primary'}>
              {`Get in Touch `}
            </Typography>
            <Typography
              component={'span'}
              fontSize={'12px'}
              sx={{ color: '#FF66AD', textDecoration: 'underline' }}>
              info@NFTPOS.com
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
