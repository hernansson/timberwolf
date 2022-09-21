import React from 'react';
import { Box } from '@mui/material';
export const VStack = ({ children, ...props }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        ...props.sx,
      }}>
      {children}
    </Box>
  );
};
