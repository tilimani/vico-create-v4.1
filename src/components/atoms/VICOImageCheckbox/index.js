import React from "react";
import {
  FormControl,
  makeStyles,
  Checkbox,
  FormControlLabel
} from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../../../common/theme";
import CheckCircle from "@material-ui/icons/CheckCircleOutlined";
import RadioButtonUnchecked from "@material-ui/icons/RadioButtonUnchecked";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    left: "-.5rem",
    top: "0rem",
    zIndex: 1000,
    lineHeight: 0,
    color: "#fff",
    "& svg": {
      width: "2rem",
      height: "2rem"
    }
  },
  img: {
    width: "150px",
    size: "contain",
    height: "100px",
    borderRadius: "12px"
  },
  checked: {
    color: "white !important",
    "&, & + $label": {
      "& img": {
        borderRadius: ""
      },
      "& $overlay": {
        backgroundColor: "#ef8e01",
        opacity: ".2"
      }
    }
  },
  label: {},
  overlay: {
    position: "absolute",
    borderRadius: "12px",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    height: "100%",
    width: "100%",
    opacity: ".5",
    transition: ".3s ease",
    backgroundColor: "#000"
  },
  container: {
    position: "relative",
    lineHeight: 0
  },
  text: {
    color: "white",
    fontSize: "18px",
    position: "absolute",
    bottom: "1rem",
    right: ".5rem",
    fontWeight: "bold",
    textAlign: "right",
    lineHeight: 1
  },
  paddingLeft: {
    paddingLeft: "11px"
  }
}));

const VICOImageCheckbox = (props) => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <>
        <FormControl className={classes.paddingLeft}>
          <FormControlLabel
            classes={{
              label: classes.label
            }}
            control={
              <Checkbox
                {...props}
                classes={{
                  root: classes.root, // class name, e.g. `classes-nesting-root-x`
                  checked: classes.checked
                }}
                icon={<RadioButtonUnchecked />}
                checkedIcon={<CheckCircle />}
                color={"primary"}
              />
            }
            label={
              <>
                <div className={classes.container}>
                  <img className={classes.img} alt="" src={props.image} />
                  <div className={classes.overlay}></div>
                  <div className={classes.text}>{props.label}</div>
                </div>
              </>
            }
          />
        </FormControl>
      </>
    </MuiThemeProvider>
  );
};

export default VICOImageCheckbox;
