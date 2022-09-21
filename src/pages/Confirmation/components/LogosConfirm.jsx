import React from 'react';
import NftLogo from '../../../assets/img/landing/nft.svg';
import BicicleLogo from '../../../assets/img/landing/bicicle.svg';
import AppleLogo from '../../../assets/img/landing/apple.svg';
import { HStack } from '../../../components/common';
import { Box, CardMedia } from '@mui/material';
export const LogosConfirm = () => {
  return (
    <HStack>
      <CardMedia component={'img'} src={NftLogo} sx={{ height: '60px' }} />
      <CardMedia component={'img'} src={BicicleLogo} sx={{ height: '60px' }} />
      <CardMedia component={'img'} src={AppleLogo} sx={{ height: '60px' }} />
    </HStack>
  );
};
