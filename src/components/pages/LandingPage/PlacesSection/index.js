import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery, Grid } from "@material-ui/core";

import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

const useStyles = makeStyles(theme => ({
  places_section: { marginTop: "4vh" },
  section_title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: "115.6%",
    color: theme.palette.secondary.dark,
    padding: "0 8vw",
    [theme.breakpoints.down("sm")]: {
      fontSize: 30
    }
  },
  highlighter: {
    position: "relative"
  },
  orange_hightLighter: {
    position: "absolute",
    top: 8,
    left: -11,
    [theme.breakpoints.down("sm")]: {
      top: 2,
      width: 180
    },
    [theme.breakpoints.down("xs")]: {
      top: 0
    }
  },
  links_wrapper: {
    display: "flex",
    marginTop: "3vh",
    padding: "0 8vw"
  },
  link_wrapper: {
    display: "flex",
    alignItems: "flex-start",
    marginRight: 20,
    cursor: "pointer"
  },
  link_wrapper_icon: {
    fontSize: 18,
    marginRight: 2
  },
  link_wrapper_text: {
    fontSize: 14,
    color: theme.palette.primary.main
  },
  not_needed_section: {
    height: 262,
    marginTop: "2vh",
    backgroundColor: theme.palette.secondary.main
  }
}));

const PlacesSection = () => {
  const classes = useStyles();
  const isMobileScreen = useMediaQuery("(max-width:600px)");
  return (
    <div className={classes.places_section}>
      {isMobileScreen ? (
        <Grid
          container
          spacing={0}
          className={classes.section_title}
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <Grid item xs={12}>
            Find the place that fits
          </Grid>
          <Grid item xs={12} className={classes.highlighter}>
            your needs
            <img
              src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/OwSG-orangeHightLighter.png"
              alt=""
              className={classes.orange_hightLighter}
            />
          </Grid>
        </Grid>
      ) : (
        <div
          className={classes.section_title}
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <span>{`Find the place that fits `}</span>
          <span className={classes.highlighter}>
            your needs
            <img
              src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/OwSG-orangeHightLighter.png"
              alt=""
              className={classes.orange_hightLighter}
            />
          </span>
        </div>
      )}
      <div className={classes.links_wrapper}>
        <div className={classes.link_wrapper}>
          <AppsOutlinedIcon
            color="primary"
            className={classes.link_wrapper_icon}
          />
          <span className={classes.link_wrapper_text}>
            Show me all the VICOs
          </span>
        </div>
        <div className={classes.link_wrapper}>
          <RoomOutlinedIcon
            color="primary"
            className={classes.link_wrapper_icon}
          />
          <span className={classes.link_wrapper_text}>Show me the map</span>
        </div>
      </div>
      <div className={classes.not_needed_section} />
    </div>
  );
};

export default PlacesSection;
