import React from "react";

import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { CreateContext } from "../../../../common/context";

import VICOMobileLinearProgress from "../../../atoms/VICOMobileLinearProgress";
import VICOSaveButton from "../../../atoms/VICOSaveButton";
import VICOReturnButton from "../../../atoms/VICOReturnButton";
import VICOButton from "../../../atoms/VICOButton";
import VICOSquareBtn from "../../../atoms/VICOSquareBtn";

const useStyles = makeStyles((theme) => ({
  availabilityViewContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 5px 4px 0px #AEA7A1",
    borderRadius: 8,
    padding: "40px 20px",
    margin: "150px 200px",
    [theme.breakpoints.down("md")]: {
      margin: "150px 80px"
    },
    [theme.breakpoints.down("sm")]: {
      boxShadow: "none",
      padding: "40px 20px",
      margin: "auto"
    }
  },
  title: {
    fontSize: 18,
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  },

  formWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 20,
    marginTop: 20,
    position: "relative",
    width: "100%",
    paddingLeft: 60,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      padding: 0
    }
  },
  actionsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    width: "100%"
  },
  availableDates: {
    marginTop: 20,
    width: "80%",
    [theme.breakpoints.down("md")]: {
      width: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto"
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center"
    }
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: 140,
      height: "auto"
    }
  },
  description: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    marginTop: 10,
    textAlign: "center",
    width: "50%"
  },
  date: {
    fontSize: 16,
    color: theme.palette.secondary.light,
    marginTop: 4,
    textAlign: "center"
  }
}));

const Availability = (props) => {
  const classes = useStyles();
  const isMediumScreen = useMediaQuery("(max-width:960px)");
  const { house, changeState } = React.useContext(CreateContext);

  const [selectedItem, setSelectedItem] = React.useState(null);
  return (
    <div>
      {isMediumScreen && (
        <div>
          <VICOMobileLinearProgress step={7} />
          <div className={classes.actionsWrapper}>
            <VICOReturnButton
              action={() => {
                props.history.push("/create/basic");
              }}
            />
            <VICOSaveButton
              action={() => {
                props.history.push(`/create/dashboard/${house.id}`);
                changeState("createStep", 1);
              }}
            />
          </div>
        </div>
      )}
      <div className={classes.availabilityViewContent}>
        {!isMediumScreen && (
          <div className={classes.actionsWrapper}>
            <VICOReturnButton
              action={() => {
                props.history.push("/create/basic");
              }}
            />
            <VICOSaveButton
              action={() => {
                props.history.push(`/create/dashboard/${house.id}`);
                changeState("createStep", 1);
              }}
            />
          </div>
        )}
        <div className={`${classes.formWrapper}`}>
          <span className={classes.title}>
            ¿A partir de cuándo está disponible este apartaestudio?
          </span>

          <Grid container spacing={3} className={classes.availableDates}>
            <Grid item sm={6} md={2} className={classes.grid}>
              <VICOSquareBtn
                icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/Vkzl-today.png"
                value="a_patir_de_hoy"
                active={selectedItem == "a_patir_de_hoy"}
                action={() => setSelectedItem("a_patir_de_hoy")}
              />
              <span className={classes.description}>A patir de hoy</span>
              <span className={classes.date}>Lun., 17.08.2020</span>
            </Grid>
            <Grid item sm={6} md={2} className={classes.grid}>
              <VICOSquareBtn
                icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/yHeP-nextWeek.png"
                value="próxima_semana"
                active={selectedItem == "próxima_semana"}
                action={() => setSelectedItem("próxima_semana")}
              />
              <span className={classes.description}>Próxima semana</span>
              <span className={classes.date}>Lun., 17.08.2020</span>
            </Grid>
            <Grid item sm={6} md={2} className={classes.grid}>
              <VICOSquareBtn
                icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/8rnN-nextMonth.png"
                value="proximo_mes"
                active={selectedItem == "proximo_mes"}
                action={() => setSelectedItem("proximo_mes")}
              />
              <span className={classes.description}>Proximo mes</span>
              <span className={classes.date}>Lun., 17.08.2020</span>
            </Grid>
            <Grid item sm={6} md={2} className={classes.grid}>
              <VICOSquareBtn
                icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/k50S-nextYear.png"
                value="proximo_año"
                active={selectedItem == "proximo_año"}
                action={() => setSelectedItem("proximo_año")}
              />
              <span className={classes.description}>Proximo año</span>
              <span className={classes.date}>Lun., 17.08.2020</span>
            </Grid>
            <Grid item sm={6} md={2} className={classes.grid}>
              <VICOSquareBtn
                icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/Oz3g-specificDate.png"
                value="fecha_especifica"
                active={selectedItem == "fecha_especifica"}
                action={() => setSelectedItem("fecha_especifica")}
              />
              <span className={classes.description}>Fecha especifica</span>
            </Grid>
            <Grid item sm={6} md={2} className={classes.grid}>
              <VICOSquareBtn
                icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/ffIJ-none.png"
                value="nunca"
                active={selectedItem == "nunca"}
                action={() => setSelectedItem("nunca")}
              />
              <span className={classes.description}>Nunca</span>
            </Grid>
          </Grid>
        </div>

        <VICOButton
          onClick={() => {
            props.history.push(`/create/dashboard/${house.id}`);
            changeState("createStep", 1);
          }}
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
  );
};

export default Availability;
