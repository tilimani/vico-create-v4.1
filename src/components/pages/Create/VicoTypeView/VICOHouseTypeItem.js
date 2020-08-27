import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  VICOHouseTypeItemWrapper: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    boxShadow: "0px 2px 4px #C4C4C4",
    borderRadius: 6,
    padding: 20,
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0px 2px 4px #EF8E01"
    },
    [theme.breakpoints.down("sm")]: {
      padding: 16,
      marginTop: 20
    }
    // "&:active": {
    //   boxShadow: "0px 2px 4px #EF8E01"
    // },
    // "&:focus": {
    //   boxShadow: "0px 2px 4px #EF8E01"
    // }
  },
  iconWrapper: {
    marginRight: 20
  },
  icon: {
    width: 24
  },
  textWrapper: {},
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.palette.secondary.main
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.57)"
  }
}));

const VICOHouseTypeItem = (props) => {
  const classes = useStyles();
  return (
    <div
      className={classes.VICOHouseTypeItemWrapper}
      onClick={() => console.log("++++++++++++")}
    >
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

export default VICOHouseTypeItem;
