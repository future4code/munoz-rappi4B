import React from 'react';
import { Router } from './route/Router';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./themes/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Router />
    </ThemeProvider>
  );
};

export default App;
