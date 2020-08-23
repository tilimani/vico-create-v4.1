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
import CheckCircle from "@material-ui/icons/CheckCircleOutlined";
import RadioButtonUnchecked from "@material-ui/icons/RadioButtonUnchecked";

const useStyles = makeStyles((theme) => ({
  root: {
    opacity: 0,
    position: "fixed",
    width: 0
  },
  text: {
    color: theme.palette.secondary.dark,
    fontSize: "20px",
    fontWeight: "bold"
  },
  label: {},
  overlay: {},
  container: {
    border: ".5px solid #dadada",
    width: "60px",
    height: "60px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0px 2px 4px rgba(196, 196, 196, 0.65)",
    transition: ".3s ease"
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
      }
    }
  }
}));

const VICOImageCheckbox = (props) => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <>
        <FormControl>
          <FormControlLabel
            classes={{
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
                  className={classes.container}
                >
                  <Grid item className={classes.text}>
                    {props.label}
                  </Grid>
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
