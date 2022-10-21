import React, { useEffect } from 'react';
import { getNFTs } from '../../../../api/getNFTs';
import { NFTList } from './NFTList';
import { useAsync } from '../../../../hooks/useAsync';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
export const NFTContainer = () => {
  const { status, value, error, execute } = useAsync(() => getNFTs(), false);

  console.log('MIV ALOR', status);
  useEffect(() => {
    execute();
  }, []);
  if (status === 'idle') {
    return console.log('idle');
  }
  if (status === 'error') {
    return console.log(error);
  }
  if (status === 'pending') {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <CircularProgress />
      </Box>
    );
  }
  return <NFTList nfts={value ?? []} />;
};
