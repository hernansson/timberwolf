import { Box } from '@mui/material';
import React from 'react';
import { WelcomeMedia } from './WelcomeMedia';
import { WelcomeText } from './WelcomeText';
import { ModalStepper } from '../ModalStepper';
export const Introduction = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row', gap: '32px' },
      }}>
      <Box
        sx={{
          width: { xs: '100%', md: '42%' },
          display: 'flex',
          alignItems: 'center',
        }}>
        <WelcomeText />
      </Box>

      <Box
        sx={{
          width: { xs: '100%', md: '58%' },
          display: 'flex',
          justifyContent: 'center',
        }}>
        <WelcomeMedia />
      </Box>
    </Box>
  );
};
