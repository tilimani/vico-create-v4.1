import React from "react";
import {
  FormControlLabel,
  withStyles,
  Checkbox,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    marginTop: 20,
    lineHeight: 1.1
  }
}));

const GreenCheckbox = withStyles({
  root: {
    color: "#07A529",
    paddingTop: 0,
    "&$checked": {
      color: "#07A529"
    }
  },
  checked: {}
})((props) => <Checkbox color="default" {...props} />);

const CustomFormControlLabel = withStyles({
  root: {
    display: "flex",
    alignItems: "flex-start"
  }
})((props) => <FormControlLabel {...props} />);

const VICOCheckbox = (props) => {
  const classes = useStyles();
  return (
    <CustomFormControlLabel
      label={<span className={classes.text}>{props.text}</span>}
      control={
        <GreenCheckbox
          checked={props.checked}
          onChange={props.handleChange}
          name="checked"
        />
      }
    />
  );
};

export default VICOCheckbox;
