import { Button, Typography } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HStack } from '../../components/common';
import { menu } from './menu';
import { useAuth } from '../../context/authContext';
export const DesktopMenu = () => {
  const { user, setIsOfferActive, nftSectionRef } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <HStack sx={{ gap: '36px', alignItems: 'center' }}>
      {menu.map((item, idx) => (
        <HStack sx={{ gap: '8px' }} key={idx}>
          <Typography
            color={'text.primary'}
            sx={item.style}
            onClick={() => {
              if (item.name === 'Ofertar 🔥') {
                if (
                  location.pathname === '/' ||
                  location.pathname === '/home'
                ) {
                  nftSectionRef.current.scrollIntoView({ behavior: 'smooth' });
                } else {
                  setIsOfferActive(true);
                }
              }
              navigate(item.path);
            }}>
            {item.name}
          </Typography>
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
