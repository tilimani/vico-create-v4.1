import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import VICOImageCheckbox from "../../../atoms/VICOImageCheckbox";
import VICOCitySelect from "../../../atoms/VICOCitySelect";
import VICOButton from "../../../atoms/VICOButton";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  marginBottom: {
    marginBottom: "1rem"
  },
  container: {
    padding: "1rem"
  }
}));
const neighborhoods = [
  {
    label: "Laureles",
    name: "laureles",
    city: "medellin",
    img:
      "https://getvico.com/images/categories_laureles.png?ba31aaf7c3645de8c19d8a81cf12bb73"
  },
  {
    label: "El Poblado",
    name: "el-poblado",
    city: "medellin",
    img:
      "https://getvico.com/images/categories_poblado.png?085b321838f31699673af1bc541349c1"
  },
  {
    label: "Envigado",
    name: "envigado",
    city: "medellin",
    img:
      "https://getvico.com/images/categories_chapinero.png?3535efcea608c3c87e51bba6b83c21fe"
  },
  {
    label: "Itagüi",
    name: "itagui",
    city: "medellin",
    img:
      "https://getvico.com/images/categories_bogota.png?70cab4746131a9124736e60ad55a5d7a"
  },
  {
    label: "Conquistadores",
    name: "conquistadores",
    city: "medellin",
    img:
      "https://getvico.com/images/categories_student.png?345f5548162e141a48804e160f4f6418"
  }
];
const Areas = () => {
  const classes = useStyles();
  const [allAreas, setAllAreas] = useState(true);
  const handleChange = (event) => {
    if (event.target.name === "allAreas") {
      //setState({ ...state, [event.target.name]: event.target.checked });
      console.log("disable all the other areas");
    }
    //setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <h2>Elige las areas de tu interés</h2>
          <p>
            Defina en en cuáles sectores de la ciudad estás buscando tu VICO.
          </p>
        </Grid>
        <Grid container alignItems={"baseline"}>
          <Grid item>
            <span>Buscando en</span>
          </Grid>
          <Grid item>
            <VICOCitySelect
              //label={translations.trans('label_city')+'*'}
              label={"City"}
              variant="filled"
              name={"city"}
              underlined="true"
              value={"Medellin"}
              style={{ display: "inline-block" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} className={classes.marginBottom}>
          <Grid item xs={6} sm={4} lg={2}>
            <VICOImageCheckbox
              label={"All"}
              checked={allAreas}
              name={"allAreas"}
              onChange={handleChange}
              image={
                "https://getvico.com/images/categories_medellin.png?5f565f54f7c6c02692b353b45c965859"
              }
            />
          </Grid>
          {neighborhoods.map((item, index) => (
            <Grid item xs={6} sm={4} lg={2}>
              <VICOImageCheckbox
                label={item.label}
                checked={item.state}
                name={item.name}
                onChange={handleChange}
                image={item.img}
              />
            </Grid>
          ))}
        </Grid>
        {/*
        <Grid item xs={12}>
          <h2>Dirección: Busca tu lugar de trabajo o universidad</h2>
          <VICOTextField
            label={"Buscar por dirección o lugar"}
            placeholder={"Cra 65F #32D"}
            variant="filled"
            name={"address"}
            className={classes.marginBottom}
            fullWidth="true"
          />
        </Grid>
         */}
        <Grid item xs={12}>
          <VICOButton
            component={RouterLink}
            to="/assessment/budget"
            variant="contained"
            color="primary"
            text="Continue"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Areas;
