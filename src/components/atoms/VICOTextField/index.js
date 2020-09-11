import React from "react";
import { TextField, makeStyles } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../../../common/theme";

const useStylesVICO = makeStyles((theme) => ({
  fullWidth: {
    width: "100%"
  },
  root: {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    paddingLeft: 20,
    background: "#FFFFFF",
    boxShadow: "0px 2px 4px #C4C4C4",
    borderRadius: 6,
    height: 58,
    width: 406,
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    },
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&.MuiInputBase-multiline": {
      paddingLeft: theme.spacing(1.5),
      paddingRight: theme.spacing(1),
      border: "1px solid #e2e2e1"
    },
    "&:hover": {
      backgroundColor: "#fff",
      boxShadow: `0px 2px 4px ${theme.palette.primary.main}`,
      borderColor: theme.palette.primary.main,
      border: "1px solid #e2e2e1"
    },
    "&:active": {
      backgroundColor: "#fff",
      boxShadow: `0px 2px 4px ${theme.palette.primary.main}`,
      borderColor: theme.palette.primary.main,
      border: "1px solid #e2e2e1"
    },
    "&:focus": {
      backgroundColor: "#fff",
      boxShadow: `0px 2px 4px ${theme.palette.primary.main}`,
      borderColor: theme.palette.primary.main,
      border: "1px solid #e2e2e1"
    }
  },
  focused: {}
}));

function VICOTextField(props) {
  const classes = useStylesVICO();
  return (
    <MuiThemeProvider theme={theme}>
      <TextField
        className={classes.fullWidth}
        InputProps={{ classes, disableUnderline: true }}
        {...props}
      />
    </MuiThemeProvider>
  );
}

export default VICOTextField;
