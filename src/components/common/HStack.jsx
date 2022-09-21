import React from 'react';
import { Box } from '@mui/material';
export const HStack = ({ children, ...props }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...props.sx,
      }}>
      {children}
    </Box>
  );
};
