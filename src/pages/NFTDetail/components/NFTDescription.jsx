import { Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NFTDescription = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: '32px', md: '64px' },
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          width: { xs: '100%', md: '50%' },
        }}>
        <Typography fontSize={'12px'} fontWeight={800} color={'text.primary'}>
          Colección:
        </Typography>
        <Typography fontSize={'11px'} fontWeight={500} color={'text.primary'}>
          El Giro de Rigo Es Otra Cosa
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          width: { xs: '100%', md: '50%' },
        }}>
        <Typography fontSize={'11px'} fontWeight={500} color={'text.primary'}>
          *La base de cada subasta es de $700.000. A partir de este valor, las
          ofertas se realizarán consecutivamente de a $100.000
        </Typography>
        <Typography fontSize={'11px'} fontWeight={500} color={'text.primary'}>
          *Para que estés al tanto de tu oferta, cuando alguien haga una más
          después de ti, recibirás un mensaje en tu correo en el que te
          informaremos que tu puja ha sido superada.
        </Typography>
        <Typography fontSize={'11px'} fontWeight={500} color={'text.primary'}>
          {`¿Tienes Dudas? `}
          <Typography
            fontSize={'11px'}
            fontWeight={500}
            component={'span'}
            onClick={() => navigate('/faqs')}
            sx={{
              color: '#FE59BC',
              ':hover': { cursor: 'pointer', textDecoration: 'underline' },
            }}>
            {` Leer mas`}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};
