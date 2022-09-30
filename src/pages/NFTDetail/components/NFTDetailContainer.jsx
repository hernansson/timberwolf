import React, { useEffect } from 'react';
import { NFTCard } from './NFTCard';
import { getNFTs } from '../../../api/getNFTs';
import { useAsync } from '../../../hooks/useAsync';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
export const NFTDetailContainer = () => {
  const { id } = useParams();
  const { status, value, error, execute } = useAsync(() => getNFTs(id), false);
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

  return (
    <NFTCard
      img={value[0]?.image}
      price={value[0]?.current_value}
      nextPrice={value[0]?.next_value}
    />
  );
};
