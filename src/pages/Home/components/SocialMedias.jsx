import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import { VStack, HStack } from '../../components/common';
import { socialmedias } from './smedias';

export const SocialMedias = () => {
  return (
    <VStack sx={{ gap: '16px', width: '100%' }}>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: '14px',
          color: 'text.primary',
          textAlign: 'center',
        }}>
        Conéctate a nuestras redes sociales para más noticias
      </Typography>
      <HStack sx={{ gap: '16px', flexWrap: 'wrap' }}>
        {socialmedias.map((sm, idx) => (
          <Link
            href={sm.link}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}>
            <Box
              sx={{
                borderWidth: '1px',
                borderColor: 'white',
                borderStyle: 'solid',
                borderRadius: '9.375px',
                width: '65px',
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
    </VStack>
  );
};
