import { createTheme  } from "@material-ui/core/styles";

const theme = createTheme ({
  palette: {
    primary: {
      main: "#e86e5a",
      constrastText: "black",
    },
    secundary: {
      main: "#000",
      constrastText: "black",
    },
  },
});

export default theme;