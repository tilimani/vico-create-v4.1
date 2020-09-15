import React from "react";
import { Slider, withStyles } from "@material-ui/core";

const PrettoSlider = withStyles((theme) => ({
  root: {
    color: "#07A529",
    height: 8,
    [theme.breakpoints.down("sm")]: {
      width: "80%"
    }
  },
  thumb: {
    height: 17,
    width: 17,
    backgroundColor: "#07A529",
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  },
  mark: {
    // backgroundColor: "#07A529",
    // height: 17,
    // width: 17,
    // borderRadius: "50%",
    // top: 8
    // left: "auto !important"
    display: "none"
  }
}))(Slider);

function valueLabelFormat(value) {
  return `${value}%`;
}

const marks = [
  {
    value: 0,
    label: "0%"
  },
  {
    value: 100,
    label: "100%"
  }
];

const VICOSlider = (props) => {
  return (
    <PrettoSlider
      valueLabelDisplay="on"
      aria-label="pretto slider"
      defaultValue={50}
      valueLabelFormat={valueLabelFormat(props.value)}
      marks={marks}
      onChange={(event, value) => props.setDeposit(value)}
    />
  );
};

export default VICOSlider;
