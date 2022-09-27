import { Typography } from '@mui/material';
import React from 'react';
import BackgroundConfirmation from '../../assets/img/landing/background_confirmation.png';
import { VStack } from '../../components/common';
import { LogosConfirm } from './components/LogosConfirm';

export const Confirmation = () => {
  document.body.style = `background-image: url(${BackgroundConfirmation});background-size:cover;background-repeat:no-repeat;background-attachment:fixed`;
  return (
    <VStack
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}>
      <VStack
        sx={{ alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
        <LogosConfirm />
        <Typography
          fontSize={'18px'}
          fontWeight={700}
          textAlign={'center'}
          sx={{ width: { xs: '90%', md: '60%' } }}
          color={'text.primary'}>
          ¡Gracias por enviarnos tus datos! Ahora estás más cerca del Giro de
          Rigo.
        </Typography>
      </VStack>
    </VStack>
  );
};
