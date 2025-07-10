import { BrowserRouter } from "react-router";

import Router from "./router";
import { useSelector } from "react-redux";
import { RootState } from "./Store";
import { Theme } from "@emotion/react";

import { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme, purpleTheme } from "./theme";

function App() {
  const themeName = useSelector((state: RootState) => state.theme.themeName);

  let theme: Theme;

  if (themeName == "light") {
    theme = lightTheme;
  } else if (themeName == "dark") {
    theme = darkTheme;
  } else if (themeName == "purple") {
    theme = purpleTheme;
  } else {
    theme = lightTheme;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
