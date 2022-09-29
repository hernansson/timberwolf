import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import { VStack, HStack } from '../../../components/common';
import { socialmedias } from './smedias';

export const SocialMedias = () => {
  return (
    <HStack sx={{ gap: '0px', flexWrap: 'wrap' }}>
      {socialmedias.map((sm, idx) => (
        <Link
          href={sm.link}
          target="_blank"
          rel="noopener noreferrer"
          key={idx}>
          <Box
            sx={{
              width: '35px',
              height: '31px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}>
            {sm.icon}
          </Box>
        </Link>
      ))}
    </HStack>
  );
};
