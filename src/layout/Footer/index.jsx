import React from 'react';
import { Box, CardMedia, Typography } from '@mui/material';
import BrandLogo from '../../assets/img/landing/brand.svg';
import { SocialMedias } from '../../pages/Register/components/SocialMedias';
export const Footer = () => {
  return (
    <Box sx={{ width: '-webkit-fill-available' }}>
      <Box
        sx={{
          background: 'rgba( 255, 255, 255, 0.1 )',
          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
          backdropFilter: 'blur(50.5px )',
          height: '120px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
        }}>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              libero vitae natoque pulvinar sit sit. Vitae consectetur sed
              consequat nibh mi ut blandit lorem nascetur. Fermentum quisque sit
              quis auctor purus. Etiam sed eget.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
              <SocialMedias />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: 'black',
          height: { xs: '96px', md: '65px' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Typography
          color={'text.primary'}
          textAlign={'center'}
          fontSize={'9px'}
          fontWeight={700}>
          POSTOBON S .A. I Organización Ardila Lülle I Todos los derechos
          reservados I Términos y condiciones I Política de tratamiento de datos
          personales I © Copyright 2022
        </Typography>{' '}
      </Box>
    </Box>
  );
};
