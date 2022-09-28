import { Typography, Box } from '@mui/material';
import React from 'react';

export const WelcomeText = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography fontSize={'24px'} fontWeight={700}>
        <Typography
          fontSize={'24px'}
          fontWeight={700}
          component={'span'}
          color={'text.primary'}>
          {`¡Con `}
        </Typography>
        <Typography
          component={'span'}
          fontSize={'24px'}
          fontWeight={700}
          sx={{ color: '#FE59BC' }}>
          Manzana Postobón
        </Typography>
        <Typography
          component={'span'}
          fontSize={'24px'}
          fontWeight={700}
          color={'text.primary'}>
          {` el Giro de Rigo es otra cosa!`}
        </Typography>
      </Typography>
      <Box>
        <Typography
          fontSize={'12px'}
          fontWeight={800}
          sx={{ color: '#DADADA' }}>
          Ahora tienes la llave para que no te pierdas la carrera de ciclismo
          más esperada del año en Colombia.
        </Typography>
        <Typography
          fontSize={'12px'}
          fontWeight={800}
          sx={{ color: '#DADADA' }}>
          <Typography
            component={'span'}
            fontSize={'12px'}
            fontWeight={800}
            sx={{
              color: '#DADADA',
            }}>
            Junto con Rigo subastaremos
          </Typography>
          <Typography
            component={'span'}
            fontSize={'12px'}
            fontWeight={800}
            sx={{ color: '#FE59BC' }}>{` 10 NFT'S `}</Typography>
          <Typography
            component={'span'}
            fontSize={'12px'}
            fontWeight={800}
            sx={{ color: '#DADADA' }}></Typography>
          que vienen acompañados de cupos para la carrera y otros beneficios
          más.
        </Typography>
      </Box>
      <Typography fontSize={'12px'} fontWeight={800} sx={{ color: '#DADADA' }}>
        Con este dinero vamos a comprar bicicletas para donarlas a los niños que
        no tienen posibilidades para desplazarse a sus escuelas, y asi les vamos
        a ayudar para que puedan ir a estudiar.
      </Typography>
    </Box>
  );
};
