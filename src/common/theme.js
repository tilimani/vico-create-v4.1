import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#EF8E01",
      light: "rgba(239, 142, 1, 0.27)",
      dark: "#F39424",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#2A3C44",
      dark: "#212529",
      light: "#C4C4C4"
    },
    success: {
      main: "#43977F"
    },
    white: {
      main: "#FFFFFF",
      light: "#FFFFFF",
      dark: "#FFFFFF",
      contrastText: "#FFFFFF"
    },
    gray: {
      main: "#00000087"
    }
  },
  typography: {
    fontFamily: "Nunito",
    button: {
      textTransform: "none"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      mdlg: 1380,
      lg: 1500,
      xl: 1920
    }
  }
});

export default theme;
