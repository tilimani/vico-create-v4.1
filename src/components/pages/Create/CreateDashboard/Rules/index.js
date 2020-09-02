import React from "react";
import { Button, Grid, makeStyles, Drawer } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";

import RightDrawerScaffold from "../RightDrawerScaffold";
import VICOSquareBtn from "../../../../atoms/VICOSquareBtn";
import VICOSlider from "../../../../atoms/VICOSlider";
import VICOTextField from "../../../../atoms/VICOTextField";
import VICOSwitch from "../../../../atoms/VICOSwitch";
import VICOButton from "../../../../atoms/VICOButton";

const useStyles = makeStyles((theme) => ({
  drawerContent: {
    width: 550,
    flexShrink: 0,
    marginLeft: 160,
    marginRight: 160,
    marginTop: 50
  },
  title: {
    fontSize: 20,
    color: theme.palette.secondary.main,
    fontWeight: "bold"
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
    color: theme.palette.secondary.main
  },
  responseWrapper: {
    display: "flex",
    marginTop: 20
  },
  response: {
    marginRight: 20
  },
  sliderResponseWrapper: {
    marginTop: 50
  },
  yesNoResponseWrapper: {
    marginTop: 40,
    display: "flex",
    justifyContent: "space-around"
  },
  TextAreaResponseWrapper: {
    marginTop: 20
  },
  additionalDescription: {
    display: "flex",
    flexDirection: "column"
  },
  infoItem: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20
  },
  receivedAmount: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.53)",
    fontWeight: "bold"
  },
  commission: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.53)"
  },
  commissionDescription: {
    fontSize: 13,
    color: "rgba(0, 0, 0, 0.53)",
    marginTop: 30
  },
  titleWithSwitch: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  secondTitle: {
    marginTop: 100
  },
  continueBtnWrapper: {
    textAlign: "center"
  }
}));

const Rules = () => {
  const classes = useStyles();

  return (
    <RightDrawerScaffold>
      <div className={classes.drawerContent}>
        <span className={classes.title}>Normas de la VICO</span>

        {/** QUESTION 1 */}
        <div className={classes.question}>
          <span className={classes.questionTitle}>1. Estadía mínima</span>
          <p className={classes.questionDescription}>
            La mayoría de las personas se quedan entre 4 y 12 meses. Sin
            embargo, recomendamos una estancia mínima de un mes para evitar
            barreras al momento de realizar las reservas.
          </p>
          <div className={classes.responseWrapper}>
            <div className={classes.response}>
              <VICOSquareBtn text="1 mes" />
            </div>
            <div className={classes.response}>
              <VICOSquareBtn text="3 meses" />
            </div>
            <div className={classes.response}>
              <VICOSquareBtn text="6 meses" />
            </div>
          </div>
        </div>
        {/** QUESTION 2 */}
        <div className={classes.question}>
          <span className={classes.questionTitle}>
            2. Costo por huésped adicional (por noche):
          </span>
          <p className={classes.questionDescription}>
            Nuestra recomendación es $20.000 COP
          </p>
          <div className={classes.responseWrapper}>
            <div className={classes.response}>
              <VICOSquareBtn text="Sin costo" />
            </div>
            <div className={classes.response}>
              <VICOSquareBtn text="$10.000 COP" />
            </div>
            <div className={classes.response}>
              <VICOSquareBtn text="$20.000 COP" />
            </div>
            <div className={classes.response}>
              <VICOSquareBtn text="Otro" />
            </div>
          </div>
        </div>
        {/** QUESTION 3 */}
        <div className={classes.question}>
          <span className={classes.questionTitle}>3. Valor del depósito</span>
          <p className={classes.questionDescription}>
            El valor final del depósito depende totalmente de ti. Selecciona un
            porcentaje, siendo 100% el valor de una (1) alquiler mensual.
          </p>
          <div className={classes.sliderResponseWrapper}>
            <VICOSlider />
          </div>
        </div>

        {/** QUESTION 4 */}
        <div className={classes.question}>
          <span className={classes.questionTitle}>
            4. ¿Está incluido el servicio de aseo?
          </span>
          <p className={classes.questionDescription}>
            Nos referimos al aseo total de las zonas sociales y se realizara
            minimo cada 15 días.
          </p>
          <div className={classes.yesNoResponseWrapper}>
            <div className={classes.response}>
              <VICOSquareBtn text="Si" />
            </div>
            <div className={classes.response}>
              <VICOSquareBtn text="No" />
            </div>
          </div>
        </div>

        {/** QUESTION 5 */}
        <div className={classes.question}>
          <span className={classes.questionTitle}>5. Reglas adicionales</span>
          <div className={classes.TextAreaResponseWrapper}>
            <VICOTextField
              multiline
              rows={4}
              placeholder="Ejemplo: No se permite fumar dentro de la casa"
            />
          </div>
        </div>
        <div className={classes.secondTitle}>
          <span className={classes.title}>Alquiler mensual</span>
        </div>
        {/** QUESTION 6 */}
        <div className={classes.question}>
          <span className={classes.questionTitle}>
            ¿Cuánto es el alquiler mensual por esta habitación?
          </span>
          <p className={classes.questionDescription}>Precio individual</p>
          <div className={classes.TextAreaResponseWrapper}>
            <VICOTextField placeholder="$1.000.000 COPxmes" />
          </div>

          <div className={classes.additionalDescription}>
            <div className={classes.infoItem}>
              <span className={classes.receivedAmount}>Tu recibes:</span>
              <span className={classes.receivedAmount}>560.000 COP</span>
            </div>
            <div className={classes.infoItem}>
              <span className={classes.commission}>Comisión mensual (7%):</span>
              <span className={classes.commission}>140.000 COP</span>
            </div>
            <p className={classes.commissionDescription}>
              "El valor de la comisión es de $560 mensual (7% de la renta
              mensual), el cuál solo se cobrará cuando se complete una
              intermediación y su habitación sea alquilada a través de VICO."
            </p>
          </div>
        </div>

        {/** QUESTION 7 */}
        <div className={classes.question}>
          <span className={classes.questionTitle}>Precio por pareja</span>
          <p className={classes.questionDescription}>
            ¿Cual es el valor extra sobre el alquiler cobras por una pareja?
          </p>
          <div className={classes.responseWrapper}>
            <div className={classes.response}>
              <VICOSquareBtn text="Sin costo" />
            </div>
            <div className={classes.response}>
              <VICOSquareBtn text="+100.000 COP" />
            </div>
            <div className={classes.response}>
              <VICOSquareBtn text="+200.000 COP" />
            </div>
            <div className={classes.response}>
              <VICOSquareBtn text="No se permite" />
            </div>
          </div>
        </div>

        {/** QUESTION 8 */}
        <div className={classes.question}>
          <div className={classes.titleWithSwitch}>
            <span className={classes.questionTitle}>Precios inteligentes</span>
            <VICOSwitch />
          </div>
          <p className={classes.questionDescription}>
            En base a tus precios optimizamos el precio de tus habitaciones
            según la demanda de tu VICO.
          </p>
        </div>

        <div className={classes.continueBtnWrapper}>
          <VICOButton
            variant="contained"
            color="primary"
            text="Continuar"
            style={{
              width: 267,
              marginTop: 46
            }}
          />
        </div>
      </div>
    </RightDrawerScaffold>
  );
};

export default Rules;

// <Grid container style={{ margin: "4rem", backgroundColor: "#dadada" }}>
//   <Grid item xs={8}>
//     <div className=".my-first-step">
//       <p>Rules</p>
//       <Button
//         component={RouterLink}
//         to="/create/dashboard/1"
//         variant="contained"
//         color="secondary"
//       >
//         Close Rules
//       </Button>
//       <Button
//         component={RouterLink}
//         to="/create/dashboard/1/services"
//         variant="contained"
//         color="secondary"
//       >
//         Continue
//       </Button>
//     </div>
//   </Grid>
// </Grid>
