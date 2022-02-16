import { createTheme , ThemeProvider } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: 'rgb(34, 34, 34)',
      },
      neutral: {
        main: '#f5f5f5',
        contrastText: '#757575',
      },
      secondary: {
        main: '#009adf'
      },
      gray: {
        main: '#002639'
      }
    },
    typography: {
      fontFamily: [
        'Roboto Mono',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    }
})

export const MaterialUiProvider = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}