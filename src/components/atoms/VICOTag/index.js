import React from "react";

import Chip from "@material-ui/core/Chip";
import { withStyles, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import "./index.css";
const useStyles = makeStyles((theme) => ({
  selectedTag: {
    background: "#EF8E01",
    boxShadow: "0px 2px 4px #EF8E01",
    color: "white !important",
    border: "none"
  }
}));
const CustomChip = withStyles((theme) => ({
  root: {
    height: 40,
    fontSize: 16,
    color: theme.palette.secondary.main,
    borderRadius: 33,
    margin: 6
  },
  label: {
    paddingLeft: 22,
    paddingRight: 22
  }
}))(Chip);
const VICOTag = (props) => {
  const classes = useStyles();
  return (
    <CustomChip
      label={props.label}
      onClick={props.action}
      variant="outlined"
      className={
        props.selected ? clsx(classes.selectedTag, "selectedTag") : null
      }
    />
  );
};

export default VICOTag;
