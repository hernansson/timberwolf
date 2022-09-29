import React from 'react';
import { NFTCard } from './NFTCard';

export const NFTDetailContainer = () => {
  /*const { isError, error, isLoading, isSuccess, data } = useQuery(
    ['nfts'],
    getNFTs,
  );*/
  const isError = false;
  const isLoading = false;
  if (isError) {
    console.log('error');
  }
  if (isLoading) {
    return console.log('loading...');
  }

  return <NFTCard />;
};
