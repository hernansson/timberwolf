import { Typography } from '@mui/material';
import React from 'react';
import BackgroundConfirmation from '../../assets/img/landing/background_confirmation.png';
import { VStack } from '../../components/common';
import { LogosConfirm } from './components/LogosConfirm';
import { useSearchParams } from 'react-router-dom';

export const Confirmation = () => {
  const [searchParams] = useSearchParams();
  const param = searchParams.get('transaction');
  const isConfirmed = atob(param) === 'true';
  document.body.style = `background-image: url(${BackgroundConfirmation});background-size:cover;background-repeat:no-repeat;background-attachment:fixed`;
  return (
    <VStack
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
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
          {isConfirmed ? 'Operación exitosa!' : 'Ups... Ha ocurrido un error'}
        </Typography>
      </VStack>
    </VStack>
  );
};
