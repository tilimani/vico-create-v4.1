import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  VICOTypeItemWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
      flexDirection: "row"
    }
  },
  iconWrapper: { marginRight: 20 },
  icon: {
    width: 40,

    [theme.breakpoints.down("sm")]: {
      width: 30
    }
  },
  textWrapper: {
    marginTop: 20,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0
    }
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: theme.palette.secondary.main
  },
  subtitle: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    marginTop: 6,
    marginBottom: 0
  }
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
