import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  footer_section: {
    marginTop: "10vh"
  },
  footer_img: {
    position: "relative",
    width: "100%",
    transform: "rotate(180deg)"
  },
  orange_bar: {
    height: 54,
    width: "100%",
    backgroundColor: theme.palette.primary.main
  },
  footer_content_wrapper: {
    position: "relative"
  },
  footer_content: {
    position: "absolute",
    left: 40,
    top: 40,
    color: "white"
  }
}));
const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer_section}>
      <div className={classes.footer_content_wrapper}>
        <img
          src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/rtDu-heroBackground.png"
          className={classes.footer_img}
          alt=""
        />
        <div className={classes.footer_content}>Not needed section</div>
      </div>
      <div className={classes.orange_bar} />
    </div>
  );
};

export default Footer;
