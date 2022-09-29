import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getNFTs } from '../../../../api/getNFTs';
import { NFTList } from './NFTList';
export const NFTContainer = () => {
  const { isError, error, isLoading, isSuccess, data } = useQuery(
    ['nfts'],
    getNFTs,
  );

  if (isError) {
    console.log(error);
  }
  if (isLoading) {
    return console.log('loading...');
  }
  if (isSuccess) {
  }

  return <NFTList nfts={data} />;
};
