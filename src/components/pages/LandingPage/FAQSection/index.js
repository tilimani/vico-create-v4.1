import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import CustomAccordion from "./CustomAccordion";

const faqData = [
  {
    question: "¿Qué es el depósito?",
    response:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    question: "¿Me devuelven el depósito?¿Qué valor tiene el depósito?",
    response: "Response2"
  },
  {
    question: "¿Cómo hago una solicitud?",
    response: "Response3"
  },
  {
    question: "¿Puedo cancelar una reserva?",
    response: "Response4"
  },
  {
    question: "¿Dónde puedo ver las fotos de las habitaciones?",
    response: "Response5"
  },
  {
    question: "¿Cómo se paga el  alquiler?",
    response: "Response6"
  },
  {
    question: "¿Puedo hablar directamente con el propietario?",
    response: "Response7"
  },
  {
    question: "¿Puedo visitar una habitación?",
    response: "Response8"
  },
  {
    question: "¿Cuando tengo que realizar un pago?",
    response: "Response9"
  },
  {
    question: "¿Qué incluye el precio?",
    response: "Response10"
  },
  {
    question: "¿VICO es seguro?",
    response: "Response11"
  },
  {
    question: "¿VICO tiene algún costo?",
    response: "Response12"
  }
];
const useStyles = makeStyles(theme => ({
  section_wrapper: { marginTop: "8vh", padding: "0 8vw" },
  section_title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: 34,
    marginLeft: "2vw",
    color: theme.palette.secondary.dark,
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
      marginLeft: "4vw"
    }
  },
  highlighter: {
    position: "relative"
  },
  orange_hightLighter: {
    position: "absolute",
    top: -4,
    left: -18,
    width: 110,
    [theme.breakpoints.down("sm")]: {
      top: -6,
      left: -20,
      width: 100
    }
  },
  faq_data: {
    marginTop: 20
  }
}));
const FAQSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.section_wrapper}>
      <span
        className={classes.section_title}
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <span className={classes.highlighter}>
          FAQ
          <img
            src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/LM7v-Cicrcle@2x.png"
            alt=""
            className={classes.orange_hightLighter}
          />
        </span>
      </span>
      <Grid container spacing={3} className={classes.faq_data}>
        {faqData.map((item, index) => (
          <Grid key={index} item xs={12} sm={12} md={4} lg={3}>
            <CustomAccordion item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FAQSection;
