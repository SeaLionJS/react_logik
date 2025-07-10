// theme.ts
import { createTheme, Theme } from "@mui/material/styles";

export const purpleTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#7B1FA2",
      light: "#AE52D4",
      dark: "#4A0072",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#9C27B0",
      light: "#D05CE3",
      dark: "#6A0080",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export const lightTheme: Theme = createTheme({
  palette: {
    mode: "light",
  },
});

export const darkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
  },
});
