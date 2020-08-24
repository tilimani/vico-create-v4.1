import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import VICOButton from "../../../../atoms/VICOButton";
import VICOImageCheckbox from "../../../../atoms/VICOImageCheckbox";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "1rem"
  },
  marginBottom: {
    marginBottom: "2rem"
  }
}));
const preferences = [
  {
    label: "Baño privado",
    name: "bathroom",
    img:
      "https://www.getvico.com/images/categories_private_bathroom.png?1760f296e498dffc2c37f62362db4ba3"
  },
  {
    label: "Aceptan mascotas",
    name: "pets",
    img:
      "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    label: "Parquadero",
    name: "parking",
    img:
      "https://images.unsplash.com/photo-1580137331426-c28eb6be023b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  }
];
const Needs = () => {
  const classes = useStyles();
  const handleChange = (event) => {
    if (event.target.name === "allAreas") {
      //setState({ ...state, [event.target.name]: event.target.checked });
      console.log("disable all the other caracters");
    }
    //setState({ ...state, [event.target.name]: event.target.checked });
    console.log("disable first button ");
  };
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <h2>¿Tienes más requerimientos?</h2>
        <p>
          Déjanos saber si tu tienes algunos requerimientos más. Así podemos
          darte mejores recomendaciones.
        </p>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1} className={classes.marginBottom}>
          {preferences.map((item, index) => (
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

export default Needs;
