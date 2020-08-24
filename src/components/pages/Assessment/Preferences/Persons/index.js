import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import VICOButton from "../../../../atoms/VICOButton";
import VICORadioButton from "../../../../atoms/VICORadioButton";
import { Link as RouterLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import LocalHotelIcon from "@material-ui/icons/LocalHotel";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
const useStyles = makeStyles((theme) => ({
  marginBottom: {
    marginBottom: "1rem"
  },
  container: {
    padding: "1rem"
  }
}));

const Preferences = () => {
  const history = useHistory();
  const [state, setState] = useState({
    singleRoom: false,
    coupleRoom: false,
    privateOption: false
  });
  const { singleRoom, coupleRoom, privateOption } = state;
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    history.push("/assessment/preferences/needs");
  };
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <h2>¿Qué estás buscando?</h2>
        <p>
          Hay diferentes tipos de VICOs, eliga entre tres tipos de alojamiento
          lo que estás buscando.
        </p>
      </Grid>
      <Grid item xs={12} className={classes.marginBottom}>
        <VICORadioButton
          fullWidth
          icon={<LocalHotelIcon />}
          label={"Una habitación para mi"}
          subtitle={
            "Habitación privada para una persona en una vivienda compartida"
          }
          name={"roomOption"}
          checked={singleRoom}
          onChange={handleChange}
          image={
            "https://getvico.com/images/categories_medellin.png?5f565f54f7c6c02692b353b45c965859"
          }
        />
      </Grid>
      <Grid item xs={12} className={classes.marginBottom}>
        <VICORadioButton
          fullWidth
          label={"Una habitación para dos personas"}
          subtitle={
            "Habitación privada para una pareja o dos personas en una vivienda compartida"
          }
          icon={<PeopleAltIcon />}
          name={"roomOption"}
          checked={coupleRoom}
          onChange={handleChange}
          image={
            "https://getvico.com/images/categories_medellin.png?5f565f54f7c6c02692b353b45c965859"
          }
        />
      </Grid>
      <Grid item xs={12} className={classes.marginBottom}>
        <VICORadioButton
          fullWidth
          icon={<HomeWorkIcon />}
          label={"Lugar completo"}
          subtitle={
            "Un apartamento o aparta-estudio privado para mi o varias personas"
          }
          name={"roomOption"}
          checked={privateOption}
          onChange={handleChange}
          image={
            "https://getvico.com/images/categories_medellin.png?5f565f54f7c6c02692b353b45c965859"
          }
        />
      </Grid>
    </Grid>
  );
};

export default Preferences;
