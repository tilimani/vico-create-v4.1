import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import GridList from "./GridList";

const useStyles = makeStyles(theme => ({
  fields_section: { marginTop: "4vh", padding: "0 8vw" },
  section_title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: "115.6%",
    color: theme.palette.secondary.dark,
    [theme.breakpoints.down("sm")]: {
      fontSize: 30
    }
  },
  highlighter: {
    position: "relative"
  },
  orange_hightLighter: {
    position: "absolute",
    top: 36,
    left: 0
  },
  search_button: {
    height: 58,
    width: 309,
    borderRadius: 12,
    fontWeight: "bold",
    fontSize: 16,
    marginTop: "2vh",
    float: "right",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      fontSize: 20
    }
  }
}));

const FieldsSection = () => {
  const classes = useStyles();
  const handleSearch = () => {
    //sreach
  };
  return (
    <div className={classes.fields_section}>
      <span
        className={classes.section_title}
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        {`What are you `}
        <span className={classes.highlighter}>
          {`looking `}
          <img
            src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/K_-i-Ilustraci%C3%B3n+1.png"
            alt=""
            className={classes.orange_hightLighter}
          />
        </span>
        for?
      </span>
      <GridList />
      <Button
        variant="contained"
        color="primary"
        className={classes.search_button}
        onClick={() => handleSearch()}
      >
        Search my new home
      </Button>
    </div>
  );
};

export default FieldsSection;
