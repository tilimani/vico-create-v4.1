import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery, Grid } from "@material-ui/core";

import Slider from "react-slick";

const partners = [
  "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/Dc-D-logo_eafit.png",
  "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/eGR_-logo_udm.png",
  "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/8Grv-logo_unal.png",
  "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/eCR6-logo_upb.png"
];
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
    top: 34,
    left: 0,
    [theme.breakpoints.down("xs")]: {
      top: 30
    }
  },
  partner_img: {
    width: "200px !important"
  },
  image_wrapper: {
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "200px !important"
  }
}));

const PartnersSection = () => {
  const classes = useStyles();
  const isMediumScreen = useMediaQuery("(max-width:960px)");
  const isMobileScreen = useMediaQuery("(max-width:400px)");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: isMediumScreen ? 1 : 3,
    slidesToScroll: 1
  };

  return (
    <div className={classes.section_wrapper}>
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
          <Grid item xs={12} className={classes.highlighter}>
            {`Trusted `}
            <img
              src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/YXQb-screwedHighlighter.png"
              alt=""
              className={classes.orange_hightLighter}
            />
          </Grid>
          <Grid item xs={12}>
            by our partners
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
          <span className={classes.highlighter}>
            {`Trusted `}
            <img
              src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/YXQb-screwedHighlighter.png"
              alt=""
              className={classes.orange_hightLighter}
            />
          </span>
          <span>by our partners</span>
        </div>
      )}
      <Slider {...settings}>
        {partners.map((item, index) => (
          <div key={index} className={classes.image_wrapper}>
            <img
              key={index}
              src={item}
              alt=""
              className={classes.partner_img}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnersSection;
