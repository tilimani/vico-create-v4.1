import React, { useState } from "react";

import { makeStyles, withStyles, TextField } from "@material-ui/core";

import RightDrawerScaffold from "./RightDrawerScaffold";
import VICOButton from "../../../atoms/VICOButton";

const useStyles = makeStyles((theme) => ({
  drawerContent: {
    width: 350,
    flexShrink: 0,
    marginLeft: 160,
    marginRight: 160,
    marginTop: 50,
    [theme.breakpoints.down("md")]: {
      width: "auto",
      margin: "30px 70px"
    },
    [theme.breakpoints.down("sm")]: {
      margin: "30px 20px"
    }
  },
  title: {
    fontSize: 20,
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  },
  description: {
    fontSize: 16,
    color: theme.palette.secondary.main
  },
  question: {
    marginTop: 40
  },
  questionTitle: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  },
  questionDescription: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.37)"
  },
  continueBtnWrapper: {
    textAlign: "center"
  }
}));

const CustomTextField = withStyles((theme) => ({
  root: {
    height: 260,
    width: 360,
    borderRadius: 6,
    paddingLeft: 20,
    paddingRight: 20,
    boxShadow: "0px 2px 4px rgba(239, 142, 5, 0.53)",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      width: "80%"
    }
  }
}))(TextField);

const Description = (props) => {
  /** Styles */
  const classes = useStyles();

  const [description, setDescription] = useState("");

  return (
    <RightDrawerScaffold
      close={() => {
        props.history.push("/create/dashboard/1");
      }}
      save={() => {}}
    >
      <div className={classes.drawerContent}>
        <span className={classes.title}>Descripción de tu VICO</span>
        <p className={classes.description}>
          Nos interesa el ambiente de tu VICO, en el primer paso debes ingresar
          al información esencial de tu casa.
        </p>
        {/** QUESTION 1 : Required */}
        <div className={classes.question}>
          <span className={classes.questionTitle}>VICO Exito</span>
          <p className={classes.questionDescription}>Calle 33c # 88a-115</p>
          <div className={classes.TextAreaResponseWrapper}>
            <CustomTextField
              multiline
              rows={8}
              InputLabelProps={{
                shrink: true
              }}
              label="Descripición"
              placeholder="Ejemplo: Hoy Conquistadores es uno de los barrios más exclusivos de la ciudad de Medellín. Esta gran unidad está ubicada justo al lado del primer centro comercial de Medellín Unicentro."
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={classes.continueBtnWrapper}>
          <VICOButton
            onClick={() => props.history.push("/create/dashboard/1")}
            variant="contained"
            color="primary"
            text="Guardar"
            style={{
              width: 267,
              marginTop: 46,
              marginBottom: 40,
              color: "white"
            }}
          />
        </div>
      </div>
    </RightDrawerScaffold>
  );
};

export default Description;
