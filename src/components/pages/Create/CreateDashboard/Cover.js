import React from "react";
import { makeStyles } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import VICOTransparentIconBtn from "../../../atoms/VICOTransparentIconBtn";

const useStyles = makeStyles((theme) => ({
  coverWrapper: {
    position: "relative"
  },
  cover: {
    height: "30vh",
    backgroundImage: `url(https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/Uq7j-cover.png)`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  topBarStatus: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "6vh",
    backgroundColor: "#07A529",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  currentStatusText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    paddingLeft: 60,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 20
    }
  },
  changeStatusText: {
    color: "#ffffff",
    fontSize: 14,
    paddingRight: 60,
    [theme.breakpoints.down("sm")]: {
      paddingRight: 30
    }
  },
  coverContent: {
    height: "50%",
    width: "80%",
    marginTop: "6vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    color: "#ffffff",
    fontSize: 36,
    fontWeight: "bold"
  },
  subtitle: {
    color: "#ffffff",
    fontSize: 18,
    paddingTop: 6
  },
  divider: {
    backgroundColor: "rgba(196, 196, 196, 0.64)",
    height: 1,
    width: "100%"
  },
  editIconWrapper: {
    position: "relative",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  coverTitleWrapper: {
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    width: "24%",
    [theme.breakpoints.down("md")]: {
      width: "auto"
    }
  }
}));

const Cover = (props) => {
  const classes = useStyles();
  const { vicoType } = props;
  return (
    <div className={classes.coverWrapper}>
      <div className={classes.cover}>
        <div className={classes.coverContent}>
          <div className={classes.coverTitleWrapper}>
            <span className={classes.title}>VICO EXITO</span>
            <div className={classes.divider}></div>
            <span className={classes.subtitle}>{vicoType}</span>
          </div>
          <div className={classes.editIconWrapper}>
            <VICOTransparentIconBtn
              iconComponent={
                <img
                  src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/mM1H-edit.png"
                  alt="edit"
                />
              }
              text="editar imagen"
              action={() => {}}
            />
          </div>
        </div>
      </div>

      <div className={classes.topBarStatus}>
        <span className={classes.currentStatusText}>Status Online</span>
        <span className={classes.changeStatusText}>Cambiar status</span>
      </div>
    </div>
  );
};

export default Cover;
