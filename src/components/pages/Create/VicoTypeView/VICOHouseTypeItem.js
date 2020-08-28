import React from "react";
import { makeStyles } from "@material-ui/core";
import { CreateConsumer } from "../../../../common/context";

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
  activeItem: {
    boxShadow: "0px 2px 4px #EF8E01"
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
    <CreateConsumer>
      {(state) => {
        return (
          <div
            className={
              state.house.type === props.houseType
                ? `${classes.VICOHouseTypeItemWrapper} ${classes.activeItem}`
                : classes.VICOHouseTypeItemWrapper
            }
            onClick={() => {
              state.changeState("house", {
                ...state.house,
                type: props.houseType
              });
            }}
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
      }}
    </CreateConsumer>
  );
};

export default VICOHouseTypeItem;
