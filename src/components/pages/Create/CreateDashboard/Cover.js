import React from "react";
import { makeStyles } from "@material-ui/core";
import VICOTransparentIconBtn from "../../../atoms/VICOTransparentIconBtn";
import coverImage from "../../../../assets/cover.png";
import edit from "../../../../assets/edit.png";

const useStyles = makeStyles((theme) => ({
  coverWrapper: {
    position: "relative"
  },
  cover: {
    height: "30vh",
    backgroundImage: `url(${coverImage})`,
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
    paddingLeft: 60
  },
  changeStatusText: {
    color: "#ffffff",
    fontSize: 14,
    paddingRight: 60
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
    height: "100%"
  },
  coverTitleWrapper: {
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    width: "24%"
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
              iconComponent={<img src={edit} alt="edit" />}
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
