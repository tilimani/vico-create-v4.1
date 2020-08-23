import React from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Grid, Slider } from "@material-ui/core";
import VICORadioButton from "../../../atoms/VICORadioButton";
import VICOButton from "../../../atoms/VICOButton";
import { Link as RouterLink } from "react-router-dom";

const VICOPriceSlider = withStyles({
  root: {
    color: "#ef8e01",
    height: 8,
    width: "80%",
    margin: "0 5%"
  },

  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 12px)",
    top: -22,
    "& *": {
      background: "transparent",
      color: "#000"
    }
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);

const useStyles = makeStyles((theme) => ({}));
function valuetext(value) {
  return `${value}°C`;
}

const PlacesSection = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState([200000, 2500000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <h1>¿Cuál es tu presupuesto de la renta mensual?</h1>
        </Grid>
        <Grid item xs={12}>
          <h2>Precio</h2>
          <h3>
            {value[0]} - {value[1]}
          </h3>
          <VICOPriceSlider
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            onChange={handleChange}
            value={value}
            min={400000}
            max={2500000}
          />
        </Grid>
        <Grid item xs={12}>
          <h2>Radio Buttons Moneda</h2>
          <VICORadioButton
            label={"COP"}
            checked={true}
            name={"allAreas"}
            //onChange={handleChange}
            image={
              "https://getvico.com/images/categories_medellin.png?5f565f54f7c6c02692b353b45c965859"
            }
          />

          <VICORadioButton
            label={"USD"}
            //checked={false}
            name={"allAreas"}
            //onChange={handleChange}
            image={
              "https://getvico.com/images/categories_medellin.png?5f565f54f7c6c02692b353b45c965859"
            }
          />

          <VICORadioButton
            label={"EUR"}
            //checked={false}
            name={"allAreas"}
            //onChange={handleChange}
            image={
              "https://getvico.com/images/categories_medellin.png?5f565f54f7c6c02692b353b45c965859"
            }
          />
        </Grid>
        <Grid item xs={12}>
          <h2>Radio Buttons Language</h2>

          <VICORadioButton
            label={"Es"}
            checked={true}
            name={"allAreas"}
            //onChange={handleChange}
            image={
              "https://getvico.com/images/categories_medellin.png?5f565f54f7c6c02692b353b45c965859"
            }
          />
          <VICORadioButton
            label={"En"}
            //checked={false}
            name={"allAreas"}
            //onChange={handleChange}
            image={
              "https://getvico.com/images/categories_medellin.png?5f565f54f7c6c02692b353b45c965859"
            }
          />
        </Grid>
        <Grid item xs={12}>
          <VICOButton
            component={RouterLink}
            to="/assessment/preferences"
            variant="contained"
            color="primary"
            text="Continue"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PlacesSection;
