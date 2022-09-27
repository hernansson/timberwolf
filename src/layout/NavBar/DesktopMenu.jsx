import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { HStack } from '../../components/common';
import { menu } from './menu';
export const DesktopMenu = () => {
  return (
    <HStack sx={{ gap: '36px' }}>
      {menu.map(item => (
        <HStack sx={{ gap: '8px' }}>
          <Typography color={'text.primary'} sx={item.style}>
            {item.name}
          </Typography>
          {item.icon}
        </HStack>
      ))}
      <Button variant="contained" sx={{ backgroundColor: '#FF3F98' }}>
        Ingresar
      </Button>
    </HStack>
  );
};
