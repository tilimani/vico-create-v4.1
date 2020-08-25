import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  VICOTypeItemWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start"
    }
  },
  icon: {
    width: 30
  },
  textWrapper: {
    marginTop: 20
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2A3C44"
  },
  subtitle: { fontSize: 16, color: "#2A3C44" }
}));

const VICOTypeItem = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.VICOTypeItemWrapper}>
      <div className={classes.iconWrapper}>
        <img src={props.icon} alt="icon" className={classes.icon} />
      </div>
      <div className={classes.textWrapper}>
        <span className={classes.title}>{props.title}</span>
        <p className={classes.subtitle}>{props.subtitle}</p>
      </div>
    </div>
  );
};

export default VICOTypeItem;
