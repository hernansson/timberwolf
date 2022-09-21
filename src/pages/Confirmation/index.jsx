import { Typography, CardMedia, Box } from '@mui/material';
import React from 'react';
import BackgroundConfirmation from '../../assets/img/landing/background_confirmation.png';
import { VStack } from '../../components/common';
import { LogosConfirm } from './components/LogosConfirm';
import TimberLogo from '../../assets/img/landing/timberwolf.png';
export const Confirmation = () => {
  document.body.style = `background-image: url(${BackgroundConfirmation});background-size:cover;background-repeat:no-repeat;background-attachment:fixed`;
  return (
    <VStack
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '100vh',
      }}>
      <Box></Box>
      <VStack
        sx={{ alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
        <LogosConfirm />
        <Typography
          fontSize={'7px'}
          fontWeight={700}
          sx={{ width: { xs: '90%', md: '50%' } }}
          color={'text.primary'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit sed
          odio congue aliquam libero, sit mauris. Interdum enim, auctor cras
          nunc aliquet ristique ege.
        </Typography>
      </VStack>
      <Box
        sx={{
          mb: { xs: '16px', md: '32px' },
          alignSelf: { xs: 'center', md: 'flex-start' },
        }}>
        <CardMedia component={'img'} src={TimberLogo} sx={{ width: '100%' }} />
      </Box>
    </VStack>
  );
};
