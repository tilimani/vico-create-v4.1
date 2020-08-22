import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Slider from "react-slick";

import ProfileItem from "./ProfileItem";

const useStyles = makeStyles(theme => ({
  section_wrapper: { marginTop: "8vh", width: "90vw" },
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
    top: -24,
    left: -38,
    [theme.breakpoints.down("sm")]: {
      width: 220
    }
  }
}));

const Community = () => {
  const classes = useStyles();
  const isMediumScreen = useMediaQuery("(max-width:960px)");
  const isMobileScreen = useMediaQuery("(max-width:600px)");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: !isMobileScreen ? true : false,
    slidesToShow: isMediumScreen ? 1 : 3,
    slidesToScroll: 1,
    focusOnSelect: true
  };

  return (
    <div className={`${classes.section_wrapper} community_section`}>
      <span
        className={classes.section_title}
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        {`Meet our `}
        <span className={classes.highlighter}>
          community
          <img
            src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/OixB-Ilustraci%C3%B3n_4.png"
            alt=""
            className={classes.orange_hightLighter}
          />
        </span>
      </span>
      <Slider {...settings}>
        {[...Array(5).keys()].map(index => (
          <ProfileItem key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default Community;
