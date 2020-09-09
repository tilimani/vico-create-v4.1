import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core";
// import "./index.css";
const CustomSelect = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: "transparent"
    }
  },
  select: {
    position: "relative",
    height: "100%",
    borderRadius: 6,
    paddingTop: 18,
    paddingLeft: 20,
    color: "#2A3C44 !important",
    fontSize: "16px !important"
  }
}))(Select);
const useStyles = makeStyles((theme) => ({
  timePickerWarpper: {
    display: "flex"
  },
  selectWrapper: {
    width: 141,
    height: 58,
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 2px 4px rgba(239, 142, 1, 0.99)",
    borderRadius: 6
  },
  space: {
    width: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.secondary.main,
    fontSize: 16
  }
}));
const VICOTimePicker = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.timePickerWarpper}>
      <div className={classes.selectWrapper}>
        <CustomSelect
          IconComponent={() => <span />}
          value={props.time.hours}
          onChange={(e) =>
            props.setTime({
              ...props.time,
              hours: e.target.value
            })
          }
        >
          {[...Array(12).keys()].map((i) => (
            <MenuItem value={String(i + 1).padStart(2, "0")}>
              {String(i + 1)
                .padStart(2, "0")
                .toString()}
            </MenuItem>
          ))}
        </CustomSelect>
      </div>
      <span className={classes.space}>:</span>
      <div className={classes.selectWrapper}>
        <CustomSelect
          IconComponent={() => <span />}
          value={props.time.minutes}
          onChange={(e) =>
            props.setTime({
              ...props.time,
              minutes: e.target.value
            })
          }
        >
          {[...Array(60).keys()].map((i) => (
            <MenuItem value={String(i).padStart(2, "0")}>
              {String(i).padStart(2, "0").toString()}
            </MenuItem>
          ))}
        </CustomSelect>
      </div>
      <span className={classes.space}></span>
      <div className={classes.selectWrapper}>
        <CustomSelect
          IconComponent={() => <span />}
          value={props.time.clock}
          onChange={(e) =>
            props.setTime({
              ...props.time,
              clock: e.target.value
            })
          }
        >
          {["a.m", "p.m"].map((i) => (
            <MenuItem value={i}>{i}</MenuItem>
          ))}
        </CustomSelect>
      </div>
    </div>
  );
};

export default VICOTimePicker;
