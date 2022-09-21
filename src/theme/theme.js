import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat'].join(','),
    allVariants: {
      fontFamily: 'Montserrat',
      textTransform: 'none',
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#000000',
    },
    background: {
      default: '#212121',
    },
  },
});
