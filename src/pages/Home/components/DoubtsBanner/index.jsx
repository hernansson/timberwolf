import React from 'react';
import { Box, Typography } from '@mui/material';
import banner from '../../../../assets/img/landing/banner_bg.png';
import { useNavigate } from 'react-router-dom';
export const DoubtsBanner = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        background:
          'linear-gradient(76.06deg, rgba(234, 233, 233, 0.132) -4.84%, rgba(128, 128, 128, 0.0855) -4.83%)',
        boxShadow: '63px 58px 77px rgba(0, 0, 0, 0.58)',
        backdropFilter: 'blur(49.5px )',
        //backgroundImage: `url(${banner})`,
        //backgroundSize: 'cover',
        //backgroundRepeat: 'no-repeat',
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
        <Box sx={{ width: { xs: '100%', md: '40%' } }}>
          <Typography
            alignSelf={'center'}
            fontWeight={700}
            fontSize={'24px'}
            color={'text.primary'}
            textAlign={'center'}>
            Aquí te explicamos todo lo que debes saber
          </Typography>
        </Box>
        <Box sx={{ width: { xs: '100%', md: '60%' } }}>
          <Typography fontSize={'12px'} color={'text.primary'}>
            Lo sabemos, no es un tema del que hablemos todos los días, pero no
            te preocupes, aquí te dejamos las preguntas frecuentes relacionadas
            con Los NFTS y subastas digitales.{' '}
            <Typography
              onClick={() => navigate('/faqs')}
              component={'span'}
              fontSize={'12px'}
              sx={{
                color: '#FE59BC',
                ':hover': { cursor: 'pointer', textDecoration: 'underline' },
              }}>
              Leer Más..
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
