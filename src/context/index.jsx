import React from 'react';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { theme } from '../theme/theme';
export const Providers = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </BrowserRouter>
  );
};
