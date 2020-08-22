import React from "react";
import {
  InputLabel,
  FormControl,
  NativeSelect,
  makeStyles,
  fade
} from "@material-ui/core";
import clsx from "clsx";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../../../common/theme";

const useStylesVICO = makeStyles((theme) => ({
  fullWidth: {
    width: "100%"
  },
  padding: {
    paddingLeft: theme.spacing(1.5)
  },
  inputLabel: {
    "&[data-shrink^='true']": {
      transform: "translate(12px, 6px) scale(0.75)"
    }
  },
  root: {
    border: "1px solid #e2e2e1",
    marginBottom: "1rem",
    overflow: "hidden",
    height: "54px",
    borderRadius: 4,
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff"
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main
    },
    "&.MuiNativeSelect-filled": {
      padding: "27px 12px 10px"
    }
  },
  focused: {}
}));

function VICOSelect(props) {
  const classes = useStylesVICO();

  return (
    <MuiThemeProvider theme={theme}>
      <FormControl
        variant="outlined"
        className={clsx(classes.root, classes.fullWidth)}
      >
        <InputLabel className={classes.inputLabel}>{props.label}</InputLabel>
        <NativeSelect
          className={classes.padding}
          {...props}
          disableUnderline={true}
        >
          <option aria-label="None" value="" />
          {props.options.map((item, i) => (
            <>
              <option value={item.value}>{item.label}</option>
            </>
          ))}
        </NativeSelect>
      </FormControl>
    </MuiThemeProvider>
  );
}

export default VICOSelect;
