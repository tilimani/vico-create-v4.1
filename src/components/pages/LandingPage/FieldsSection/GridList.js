import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import GridItem from "./GridItem";

const mockData = [
  {
    title: "Laureles",
    image:
      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/tEP_-Laureles.jpg"
  },
  {
    title: "Apartment",
    image:
      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/_rJV-Aparment.jpg"
  },
  {
    title: "Private bathroom",
    image:
      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/_GQT-Bathroom.jpg"
  },
  {
    title: "Chapinero",
    image:
      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/CnQa-Chapinero.jpg"
  },
  {
    title: "Economic",
    image:
      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/IQEO-Economic.jpg"
  },
  {
    title: "Studio",
    image:
      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/3y31-Studio.jpg"
  },
  {
    title: "Laureles",
    image:
      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/tEP_-Laureles.jpg"
  },
  {
    title: "Apartment",
    image:
      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/_rJV-Aparment.jpg"
  },
  {
    title: "Private bathroom",
    image:
      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/_GQT-Bathroom.jpg"
  }
];
const useStyles = makeStyles(theme => ({
  list: {
    marginTop: "4vh"
  }
}));
const GridList = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.list}>
      {mockData.map((item, index) => (
        <GridItem key={index} title={item.title} image={item.image} />
      ))}
    </Grid>
  );
};

export default GridList;
