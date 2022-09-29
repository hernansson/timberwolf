import { Box, Typography } from '@mui/material';
import React from 'react';

export const NFTDescription = () => {
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
          ¡EL GRAN RIGO!
        </Typography>
        <Typography fontSize={'11px'} fontWeight={500} color={'text.primary'}>
          Esta colección de NFT`S está inspirada en nuestro amigo Rigo, ícono
          Colombiano del ciclismo, quien nos ha regalado múltiples alegrías a lo
          largo de los años en el Giro de Italia, La vuelta a España, El Tour de
          Francia y por supuesto La vuelta a Colombia. Podrás elegir 10 opciones
          diferentes que lo representan. Elige y oferta la que más te guste.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          width: { xs: '100%', md: '50%' },
        }}>
        <Typography fontSize={'12px'} fontWeight={800} color={'text.primary'}>
          ¿Tienes Dudas?
        </Typography>
        <Typography fontSize={'11px'} fontWeight={500} color={'text.primary'}>
          Lo sabemos, no es un tema del que hablemos todos los días, pero no te
          preocupes, aquí te dejamos las preguntas frecuentes relacionadas con
          Los NFTS y subastas digitales.
        </Typography>
      </Box>
    </Box>
  );
};
