import { Box } from '@mui/material';
import React from 'react';
import { NFTCard } from './NFTCard';

export const NFTList = ({ nfts }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '32px',
        justifyContent: { md: 'flex-start', xs: 'center' },
      }}>
      {nfts.map((nft, idx) => (
        <NFTCard
          key={idx}
          price={nft.current_value}
          img={nft.image}
          id={nft.id}
        />
      ))}
    </Box>
  );
};
