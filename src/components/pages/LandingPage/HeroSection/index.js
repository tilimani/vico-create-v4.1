import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import "./index.css";
import CustomSelect from "./CustomSelect";
import CustomDatePicker from "./CustomDatePicker";

const cityOptions = [
  { value: "Medellín", label: "Medellín" },
  { value: "Poblado", label: "Poblado" },
  { value: "Laureles", label: "Laureles" }
];

const housingOptions = [
  { value: "Option 1", label: "Option 1" },
  { value: "Option 2", label: "Option 2" },
  { value: "Option 3", label: "Option 3" }
];

const useStyles = makeStyles(theme => ({
  search_area: {
    marginTop: "6vh",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2vh"
    }
  },
  grid_item_content: {
    width: "100%",
    height: 58,
    fontWeight: "bold",
    fontSize: 16,
    borderRadius: 12
  }
}));

const HeroSection = () => {
  const [searchElements, setSearchElements] = useState({
    city: "",
    date: new Date(),
    housing: ""
  });

  const classes = useStyles();
  const isMobileScreen = useMediaQuery("(max-width:600px)");
  const handleSearch = () => {
    //Search
  };
  return (
    <div className="hero-section-wrapper">
      {/** LEFT RECTANGLES DESIGN */}
      {/** Dark gray background */}
      {isMobileScreen ? (
        <img
          src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/tNef-bg_mobile.png"
          className="hero-section-bg"
          alt=""
        />
      ) : (
        <img
          src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/rtDu-heroBackground.png"
          className="hero-section-bg"
          alt=""
        />
      )}

      {/** MAIN CONTENT (TEXT/PICKERS ...) */}
      <div className="hero-content">
        <img
          src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/X7w8-logo.png"
          alt="logo"
          id="vico-logo"
        />
        <span
          className="title"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          Love where you live
        </span>
        <span
          className="description"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          Find and book furnished rooms and apartments for mid-and long-term
          stays in Medellin and Bogota.
        </span>
        <Grid container spacing={3} className={classes.search_area}>
          <Grid item xs={12} sm={6} md={3}>
            <div
              style={{
                backgroundColor: "white",
                color: "white",
                height: 58,
                borderRadius: 12
              }}
            >
              <CustomSelect
                name="city"
                title="City"
                options={cityOptions}
                isSearchable={true}
                value={searchElements.city}
                setValue={value =>
                  setSearchElements({
                    ...searchElements,
                    city: value
                  })
                }
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div
              style={{
                backgroundColor: "white",
                color: "white",
                height: 58,
                borderRadius: 12,
                cursor: "pointer"
              }}
            >
              <CustomDatePicker
                date={searchElements.date}
                setDate={value =>
                  setSearchElements({
                    ...searchElements,
                    date: value
                  })
                }
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div
              style={{
                backgroundColor: "white",
                color: "white",
                height: 58,
                borderRadius: 12
              }}
            >
              <CustomSelect
                name="home"
                title="All housing"
                options={housingOptions}
                isSearchable={false}
                value={searchElements.housing}
                setValue={value =>
                  setSearchElements({
                    ...searchElements,
                    housing: value
                  })
                }
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="contained"
              color="primary"
              className={classes.grid_item_content}
              onClick={() => handleSearch()}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HeroSection;
