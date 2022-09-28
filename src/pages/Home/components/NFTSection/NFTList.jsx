import { Box } from '@mui/material';
import React from 'react';
import { NFTCard } from './NFTCard';

export const NFTList = ({ nfts }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        justifyContent: 'center',
      }}>
      {nfts.map(nft => (
        <NFTCard price={nft.price} img={nft.img} />
      ))}
    </Box>
  );
};
