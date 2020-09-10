import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

import VICORadioButton from "../../../atoms/VICORadioButton";

const useStyles = makeStyles((theme) => ({
  availabilityItemWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  description: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    marginTop: 10,
    textAlign: "center",
    width: "50%"
  },
  date: {
    fontSize: 16,
    color: theme.palette.secondary.light,
    marginTop: 4,
    textAlign: "center"
  }
}));

const AvailabilityItem = (props) => {
  const classes = useStyles();
  const { icon, description, date, value, checked, setSelectedItem } = props;

  return (
    <div className={classes.availabilityItemWrapper}>
      <VICORadioButton
        icon={icon}
        checked={checked}
        value={value}
        onChange={props.onChange}
      />
      <span className={classes.description}>{description}</span>
      {date && <span className={classes.date}>{date}</span>}
    </div>
  );
};

export default AvailabilityItem;
