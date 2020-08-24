import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import VICOButton from "../../../atoms/VICOButton";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({}));

const Preferences = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <h1>Especifica tus necesidades y prefrencias</h1>
      </Grid>
      <Grid item xs={12}>
        <h2>Características de la habitación</h2>
        <ul>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="👫 Habitación para parejas "
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="🛀 Con baño privado"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="🌵 Ventana hacía afuera"
            />
          </FormGroup>
        </ul>
      </Grid>
      <Grid item xs={12}>
        <h2>Características del lugar</h2>
        <ul>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="🏠 Apartamento entero"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="👶 Pequeño (Menos de 4 habitaciones)"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="👵 Grande (Más de 4 habitaciones)"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="🏊 Con pisicina"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="🌿 Weed friendly"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="🐶 Acepatan mascotas"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="🚗 Tiene parquedero"
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="🌞 Balcón"
            />
          </FormGroup>
        </ul>
      </Grid>
      <Grid item xs={12}>
        <VICOButton
          onClick={() => console.log("test")}
          component={RouterLink}
          to="/assessment/loading"
          variant="contained"
          color="primary"
          text="Continue"
        />
      </Grid>
    </Grid>
  );
};

export default Preferences;
