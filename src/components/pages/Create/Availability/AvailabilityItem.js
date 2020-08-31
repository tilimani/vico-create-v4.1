import React from "react";
import { makeStyles } from "@material-ui/core";

import VICOSquareBtn from "../../../atoms/VICOSquareBtn";

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
    marginTop: 10
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
  const { icon, description, date } = props;
  return (
    <div className={classes.availabilityItemWrapper}>
      <VICOSquareBtn icon={icon} />
      <span className={classes.description}>{description}</span>
      <span className={classes.date}> Lun., 17.08.2020 </span>
    </div>
  );
};

export default AvailabilityItem;
