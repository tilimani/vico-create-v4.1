import React from "react";
import {
  FormControl,
  makeStyles,
  Radio,
  Grid,
  FormControlLabel
} from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../../../common/theme";
import clsx from "clsx";
import "./index.css";
const useStyles = makeStyles((theme) => ({
  root: {
    opacity: 0,
    position: "fixed",
    width: 0
  },
  text: {
    color: theme.palette.secondary.dark,
    fontSize: "16px"
  },
  label: {
    marginLeft: "12px",
    "&, & + $fullWidth": {
      marginLeft: "0px"
    }
  },
  overlay: {},
  container: {
    border: ".5px solid #dadada",
    width: "88px",
    height: "80px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0px 2px 4px rgba(196, 196, 196, 0.65)",
    transition: ".3s ease",
    "&$fullWidth": {
      width: "100%",
      height: "auto",
      minHeight: "60px",
      paddingTop: "1rem",
      paddingBottom: "1rem"
    },
    "&:hover": {
      border: "1px solid #ef8e01",
      boxShadow: "0px 2px 4px rgba(239, 142, 5, 0.53)"
    }
  },
  checked: {
    "&, & + $label": {
      "& $text": {
        color: "#fff"
      },
      "& $container": {
        backgroundColor: "#ef8e01",
        border: "#ef8e01",
        boxShadow: "0px 2px 4px rgba(239, 142, 5, 0.53)"
      },
      "& svg": {
        color: "white"
      }
    }
  },
  fullWidth: {
    marginLeft: "0px",
    "& $text": {
      fontSize: "20px",
      lineHeight: "18px",
      "& $header": {
        marginBottom: ".5rem"
      }
    }
  },
  labelFormControl: {
    display: "contents"
  },
  // paddingLeft: {
  //   paddingLeft: "11px"
  // },
  iconButton: {
    "& $text": {
      textAlign: "left"
    },
    "& svg": {
      color: theme.palette.primary.main,
      width: "2rem",
      height: "2rem"
    }
  },
  subtitle: {
    color: theme.palette.gray.main,
    fontSize: "14px",
    lineHeight: "14px",
    fontWeight: "400"
  },
  header: {}
}));

const VICOImageCheckbox = (props) => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <>
        <FormControl
          className={clsx({
            [classes.paddingLeft]: !props.fullWidth
          })}
          fullWidth={props.fullWidth}
        >
          <FormControlLabel
            classes={{
              root: props.fullWidth ? classes.labelFormControl : "",
              label: classes.label
            }}
            control={
              <Radio
                {...props}
                classes={{
                  root: classes.root, // class name, e.g. `classes-nesting-root-x`
                  checked: classes.checked
                }}
                //icon={<RadioButtonUnchecked />}
                //checkedIcon={<CheckCircle />}
                //color={"primary"}
              />
            }
            label={
              <>
                <Grid
                  justify="center"
                  alignItems="center"
                  container
                  className={clsx([classes.container], {
                    [classes.fullWidth]: props.fullWidth
                    // [classes.iconButton]: props.icon
                  })}
                >
                  {props.icon ? (
                    <>
                      <img
                        src={props.icon}
                        alt=""
                        className={props.checked ? "active" : null}
                      />

                      {/* <Grid item xs={9} className={classes.text}>
                        <div className={classes.header}>{props.label}</div>
                        {props.subtitle && (
                          <Grid item xs={12} className={classes.subtitle}>
                            <div>{props.subtitle}</div>
                          </Grid>
                        )}
                      </Grid> */}
                    </>
                  ) : (
                    <>
                      <Grid item className={classes.text}>
                        <div className={classes.header}>{props.label}</div>
                        {props.subtitle && (
                          <Grid item xs={12} className={classes.subtitle}>
                            <div>{props.subtitle}</div>
                          </Grid>
                        )}
                      </Grid>
                    </>
                  )}
                </Grid>
              </>
            }
          />
        </FormControl>
      </>
    </MuiThemeProvider>
  );
};

export default VICOImageCheckbox;
