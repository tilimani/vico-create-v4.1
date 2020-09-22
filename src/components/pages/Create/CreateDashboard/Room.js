import React from "react";
import { makeStyles, IconButton, Button } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import "./Room.css";

const useStyles = makeStyles((theme) => ({
  roomFrame: {
    borderRadius: 6,
    backgroundColor: "#fbf7f4",
    position: "relative",
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)"
  },
  doneStatus: {
    color: "#07A529"
  },
  notDoneStatus: {
    color: "#C4C4C4",
    position: "absolute",
    right: -10,
    top: -10,
    height: 28,
    width: 28
  },
  title: {
    fontSize: 20,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10
  },
  roomContent: {
    position: "relative",
    height: "100%"
  },
  roomContentHeader: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 16px"
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingLeft: 5
  },
  iconBtn: {
    paddingLeft: 8,
    paddingRight: 8
  },
  divider: {
    position: "relative",
    width: "86%",
    height: 1,
    backgroundColor: "rgba(196, 196, 196, 0.31)",
    margin: "auto"
  },
  editBtn: {
    color: "#3A3A3A",
    fontWeight: "bold",
    fontSize: 14,
    border: "none",
    backgroundColor: "transparent"
  },
  gallery: {
    width: 91,
    height: 96,
    backgroundColor: "#C4C4C4",
    borderRadius: 8,
    position: "relative"
  },
  roomPreview: {
    display: "flex",
    padding: 16
  },
  infos: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  galleryOverlay: {
    position: "absolute",
    left: 0,
    bottom: 0,
    height: 30,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.69)",
    opacity: 0.8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: 12
  }
}));

const Room = (props) => {
  const classes = useStyles();
  const { done, roomNumber } = props;
  return (
    <div className={classes.roomFrame}>
      <CheckCircleIcon
        className={done ? classes.doneStatus : classes.notDoneStatus}
        color="#C4C4C4"
      />

      <div className={classes.roomContent}>
        <div className={classes.roomContentHeader}>
          <div className={classes.titleWrapper}>
            <span className={classes.title}>{`Habitación ${roomNumber}`}</span>
          </div>
          <div className={classes.actionsWrapper}>
            <IconButton className={`${classes.iconBtn} iconBtn`}>
              <img
                src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/7Oss-blackEdit.png"
                alt=""
              />
            </IconButton>

            <IconButton className={`${classes.iconBtn} iconBtn`}>
              <img
                src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/8rnN-nextMonth.png"
                alt=""
              />
            </IconButton>
            <IconButton className={`${classes.iconBtn} iconBtn`}>
              <img
                src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/Jf9w-verticalDots.png"
                alt=""
              />
            </IconButton>
          </div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.roomPreview}>
          <div className={classes.gallery}>
            <div className={classes.galleryOverlay}>
              <span>Galleria</span>
            </div>
          </div>
          <div className={classes.infos}>
            <Button
              color="dafault"
              className={`${classes.editBtn} iconBtn`}
              startIcon={
                <img
                  src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/7Oss-blackEdit.png"
                  alt=""
                />
              }
            >
              Editar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
