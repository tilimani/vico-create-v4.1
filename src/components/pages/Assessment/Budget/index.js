import React from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Grid, Slider } from "@material-ui/core";
import VICORadioButton from "../../../atoms/VICORadioButton";
import VICOButton from "../../../atoms/VICOButton";
import VICOSelect from "../../../atoms/VICOSelect";
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

const useStyles = makeStyles((theme) => ({
  spacingBottom: {
    marginBottom: "2rem"
  },
  container: {
    padding: "1rem"
  }
}));
function valuetext(value) {
  return `${value}`;
}

const PlacesSection = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(2500000);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <h2>¿Cuál es tu presupuesto de la renta mensual?</h2>
          <p>
            Según tu presupuesto podemos ofrecerte diferentes opciones, tenemos
            VICOs en diferentes niveles de precios.
          </p>
        </Grid>
        <Grid item xs={12}>
          <h3>Precios máximo hasta {value}</h3>
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
        {/*
        <Grid className={classes.spacingBottom} item xs={12}>
          <h4>Mostrar precios en tu moneda:</h4>
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
      */}
        <Grid
          className={classes.spacingBottom}
          container
          alignItems={"baseline"}
        >
          <Grid item>
            <span>Mostrar precios en tu moneda:</span>
          </Grid>
          <Grid item>
            <VICOSelect
              //label={translations.trans('label_city')+'*'}
              label={"Idioma"}
              variant="filled"
              name={"language"}
              underlined="true"
              style={{ display: "inline-block" }}
              options={[
                { value: "usd", label: "USD" },
                { value: "cop", label: "COP" },
                { value: "eur", label: "EUR" }
              ]}
            />
          </Grid>
        </Grid>

        <Grid className={classes.spacingBottom} item xs={12}>
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
