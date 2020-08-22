import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  profile_wrapper: {
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "6vh",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 100
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0
    }
  },
  description: {
    fontSize: 16,
    color: theme.palette.secondary.light,
    marginTop: 20,
    width: 300,
    textAlign: "center"
  },
  name: {
    fontSize: 16,
    color: theme.palette.secondary.light,
    marginTop: 10
  },
  avatar_wrapper: {
    position: "relative",
    width: 320,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  avatar_img: {
    zIndex: 10
  }
}));

const ProfileItem = () => {
  const classes = useStyles();
  return (
    <div className={classes.profile_wrapper}>
      <div className={`${classes.avatar_wrapper} avatar_wrapper`}>
        <img
          src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/CoqH-Ellipse.png"
          alt=""
          className={classes.avatar_img}
        />
      </div>

      <Typography component="p" className={classes.description}>
        Manage your properties efficiently and turn them into a profit by
        becoming a host, you became part of our family.
      </Typography>
      <Typography component="span" className={classes.name}>
        Agathe Alzate
      </Typography>
    </div>
  );
};

export default ProfileItem;
