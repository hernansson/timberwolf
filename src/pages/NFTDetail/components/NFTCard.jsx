import React from 'react';
import { styles } from './styles';
import { Box } from '@mui/material';
import { NFTContent } from './NFTContent';
import { NFTDescription } from './NFTDescription';
export const NFTCard = () => {
  return (
    <Box sx={styles.mainContainer}>
      <NFTContent />
      <NFTDescription />
    </Box>
  );
};
