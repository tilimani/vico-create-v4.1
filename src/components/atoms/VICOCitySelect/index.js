import React, { useState } from "react";
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
  focused: {},
  fullWidth: {
    width: "100%"
  },
  underlined: {
    border: "0px solid",
    color: "#ef8e01",
    borderRadius: "0px",
    backgroundColor: "white",
    borderBottom: "1px solid " + theme.palette.primary.main,
    height: "24px",
    "& $inputLabel": {
      display: "none"
    },
    "& $padding": {
      paddingLeft: "8px",
      marginTop: "-4px",
      color: "#ef8e01"
    },
    "& svg": {
      color: theme.palette.primary.main
    }
  }
}));

function VICOSelect(props) {
  const [city, setCity] = useState("");
  const classes = useStylesVICO();
  const cityOptions = [
    { value: "medellin", label: "Medellín" },
    { value: "bogota", label: "Bogotá" }
  ];

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  console.log(props.fullWidth);
  return (
    <MuiThemeProvider theme={theme}>
      <FormControl
        variant="outlined"
        className={clsx([classes.root], {
          [classes.fullWidth]: props.fullWidth,
          [classes.underlined]: props.underlined
        })}
      >
        <InputLabel className={classes.inputLabel}>{props.label}</InputLabel>
        <NativeSelect
          className={classes.padding}
          {...props}
          disableUnderline={true}
          options={cityOptions}
          value={city}
          onChange={handleCityChange}
        >
          {/*<option aria-label="None" value="" />*/}
          {cityOptions.map((item, i) => (
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
