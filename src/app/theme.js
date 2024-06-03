'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({

palette: {
  mode: 'dark',
    primary: {
      light: '#e8a53c',
      main: '#e08c26',
      dark: '#d2701e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#c4c4c4',
      main: '#7c7c7c',
      dark: '#494949',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
