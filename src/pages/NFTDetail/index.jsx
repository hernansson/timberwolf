import { Box } from '@mui/material';
import React from 'react';
import { NFTDetailContainer } from './components/NFTDetailContainer';

export const NFTDetail = () => {
  document.body.style = `background: #1B202A;background-size:cover;background-repeat:no-repeat;background-attachment:fixed`;
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
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
