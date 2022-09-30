import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HStack } from '../../components/common';
import { menu } from './menu';
import { useAuth } from '../../context/authContext';
export const DesktopMenu = () => {
  const { user } = useAuth();

  const navigate = useNavigate();
  return (
    <HStack sx={{ gap: '36px', alignItems: 'center' }}>
      {menu.map(item => (
        <HStack sx={{ gap: '8px' }}>
          <Typography
            color={'text.primary'}
            sx={item.style}
            onClick={() => navigate(item.path)}>
            {item.name}
          </Typography>
          {item.icon}
        </HStack>
      ))}
      {user ? (
        <Typography color={'text.primary'}>{`Bienvenido Ciclista!`}</Typography>
      ) : (
        <Button
          variant="contained"
          onClick={() => navigate('/login')}
          sx={{ backgroundColor: '#FF3F98', borderRadius: '8px' }}>
          Ingresar
        </Button>
      )}
    </HStack>
  );
};
