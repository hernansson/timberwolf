import { Box, Button, CardMedia, Typography } from '@mui/material';
import React from 'react';

export const NFTCard = ({ img, price }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        width: '168px',
      }}>
      <CardMedia component={'img'} src={img} sx={{ borderRadius: '30px' }} />
      <Typography
        fontSize={'19px'}
        color={'text.primary'}>{`$${price}`}</Typography>
      <Button variant="contained" sx={{ backgroundColor: '#FE59BC' }}>
        OFERTAR
      </Button>
    </Box>
  );
};
