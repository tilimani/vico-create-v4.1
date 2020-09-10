import React from "react";
import { makeStyles } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
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
    position: "relative",
    height: "80%",
    "&:hover": {
      boxShadow: "0px 2px 4px #EF8E01"
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 14,
      paddingBottom: 14,
      marginTop: 20
    }
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
    color: "rgba(0, 0, 0, 0.57)",
    marginBottom: 0,
    marginTop: 12
  }
}));

const VICOHouseTypeItem = (props) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:960px)");
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
              if (isDesktop) {
                props.history.push("/create/name");
              }
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
