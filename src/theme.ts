import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD27A',
      contrastText: '#1A1A1A',
    },
    secondary: {
      main: '#FFB347',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F9F9F9',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#FFD27A',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFD27A',
          color: '#1A1A1A',
          '&:hover': {
            backgroundColor: '#FFB347',
            color: '#FFFFFF',
          },
        },
      },
    },
  },
});

export default theme;
