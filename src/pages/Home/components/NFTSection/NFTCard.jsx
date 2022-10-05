import { Box, Button, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NFTCard = ({ img, price, id }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}>
      <CardMedia
        component={'img'}
        image={img}
        sx={{
          borderRadius: '30px',
          height: '220px',
          boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          border: '1px solid white',
        }}
      />
      <Typography fontSize={'19px'} color={'text.primary'}>{`$${price} ${
        price > 1000000 ? '🔥' : ''
      }`}</Typography>
      <Button
        variant="contained"
        sx={{ backgroundColor: '#FE59BC' }}
        onClick={() => navigate(`/nft/${id}`)}>
        {`OFERTAR`}
      </Button>
    </Box>
  );
};
