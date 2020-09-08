import React from "react";
import { FormControlLabel, Switch, withStyles } from "@material-ui/core";

const CustomSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    borderRadius: 17,
    margin: 20,
    border: `1px solid ${theme.palette.grey[400]}`
  },
  switchBase: {
    padding: 0,

    color: theme.palette.secondary.light,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#07A529",
        opacity: 1,
        border: "none"
      }
    },
    "&$focusVisible $thumb": {
      color: "#07A529",
      border: "6px solid #fff"
    }
  },
  thumb: {
    width: 24,
    height: 24
  },
  track: {
    borderRadius: 26 / 2,
    // border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"])
  },
  checked: {},
  focusVisible: {}
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
      {...props}
    />
  );
});

const VICOSwitch = (props) => {
  return (
    <CustomSwitch
      checked={props.checked}
      onChange={props.handleChange}
      name="checked"
    />
  );
};

export default VICOSwitch;
