import { Box } from '@mui/material';
import React from 'react';
import { NFTDetailContainer } from './components/NFTDetailContainer';
import Background from '../../assets/img/landing/background_nft_detail.png';
export const NFTDetail = () => {
  document.body.style = `background: #1B202A;background-size:cover;background-repeat:no-repeat;background-attachment:fixed; background-image:url(${Background})`;
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: { md: '40px', xs: '80px' },
      }}>
      <Box
        sx={{
          width: '80%',
        }}>
        <NFTDetailContainer />
      </Box>
    </Box>
  );
};
