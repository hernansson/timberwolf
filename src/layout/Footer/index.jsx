import React from 'react';
import { Box, CardMedia, Typography } from '@mui/material';
import BrandLogo from '../../assets/img/landing/brand.svg';
import { SocialMedias } from '../../pages/Register/components/SocialMedias';
import { useAuth } from '../../context/authContext';
export const Footer = () => {
  const { setOpenTos } = useAuth();
  return (
    <Box sx={{ width: '-webkit-fill-available' }}>
      <Box
        sx={{
          background:
            'linear-gradient(76.06deg, rgba(234, 233, 233, 0.132) -4.84%, rgba(128, 128, 128, 0.0855) -4.83%)',
          boxShadow: '63px 58px 77px rgba(0, 0, 0, 0.58)',
          backdropFilter: 'blur(49.5px )',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: 4,
          gap: '16px',
        }}>
        <Box sx={{ width: { xs: '100%', md: '40%' } }}>
          <CardMedia
            component={'img'}
            src={BrandLogo}
            sx={{ objectFit: 'contain' }}
          />
        </Box>

        <SocialMedias />
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
          POSTOBON S .A. I Organización Ardila Lülle I{' '}
          <Typography
            component={'span'}
            color={'text.primary'}
            textAlign={'center'}
            fontSize={'9px'}
            fontWeight={700}
            onClick={() => setOpenTos(prev => !prev)}
            sx={{
              ':hover': { cursor: 'pointer', textDecoration: 'underline' },
            }}>
            Todos los derechos reservados I Términos y condiciones I Política de
            tratamiento de datos personales{' '}
          </Typography>{' '}
          I © Copyright 2022
        </Typography>{' '}
      </Box>
    </Box>
  );
};
