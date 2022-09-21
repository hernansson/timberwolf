import React from 'react';
import { Typography, Box } from '@mui/material';
const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}>
      <Typography
        sx={{ fontSize: '10px', color: 'text.primary', textAlign: 'center' }}>
      </Typography>
    </Box>
  );
};

export default Footer;
