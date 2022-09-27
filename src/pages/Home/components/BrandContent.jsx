import { CardMedia, Typography } from '@mui/material';
import React from 'react';
import brand from '../../../assets/img/landing/brand.svg';
import { HStack, VStack } from '../../../components/common';
export const BrandContent = () => {
  return (
    <VStack sx={{ gap: '32px', alignItems: 'center' }}>
      <HStack sx={{ width: '120%', justifyContent: 'flex-start' }}>
        <CardMedia
          component={'img'}
          src={brand}
          sx={{ objectFit: 'contain' }}
        />
      </HStack>
      <VStack sx={{ gap: '16px' }}>
        <Typography
          fontSize={'14px'}
          fontWeight={700}
          lineHeight={'22px'}
          color="text.primary">
          ¡Con Manzana Postobón el Giro de Rigo es otra cosa!
        </Typography>
        <Typography
          fontSize={'14px'}
          fontWeight={500}
          lineHeight={'22px'}
          color="text.primary">
          ¿Y si te dijéramos que con un NFT tendrías la llave del Giro de Rigo?
        </Typography>
        <Typography
          fontSize={'14px'}
          fontWeight={500}
          lineHeight={'22px'}
          color="text.primary">
          ¡El 4 de Octubre lo sabrás!
        </Typography>
        <Typography
          fontSize={'14px'}
          fontWeight={500}
          lineHeight={'22px'}
          color="text.primary">
          Regístrate para mantenerte informado
        </Typography>
      </VStack>
    </VStack>
  );
};
