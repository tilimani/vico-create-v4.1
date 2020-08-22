import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  needs_section: { marginTop: "8vh", padding: "0 8vw" },
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
  subtitle: {
    color: theme.palette.secondary.dark,
    fontSize: 16,
    marginTop: 20,
    [theme.breakpoints.down("md")]: {
      fontSize: 14
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16
    }
  },
  grid_list: {
    marginTop: 20
  },
  grid_item: {
    display: "flex",
    alignItems: "center"
  },
  grid_item_text: {
    fontWeight: "bold",
    fontSize: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16
    }
  }
}));

const GreenCheckbox = withStyles({
  root: {
    marginRight: 10,
    "&$checked": {
      color: "#43977F"
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const NeedsSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.needs_section}>
      <span
        className={classes.section_title}
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        {`Thinking of `}
        <span className={classes.highlighter}>
          {`your needs `}
          <img
            src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/K_-i-Ilustraci%C3%B3n+1.png"
            alt=""
            className={classes.orange_hightLighter}
          />
        </span>
      </span>
      <div
        className={classes.subtitle}
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <span>
          Your safety is our priority, therefore we designed our reservation
          system thinking of your needs.
        </span>
      </div>
      <Grid container spacing={3} className={classes.grid_list}>
        <Grid item xs={12} sm={6} md={4} className={classes.grid_item}>
          <GreenCheckbox disabled checked />
          <Typography className={classes.grid_item_text}>
            Secure payments
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.grid_item}>
          <GreenCheckbox disabled checked />
          <Typography className={classes.grid_item_text}>
            Online rental contract
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.grid_item}>
          <GreenCheckbox disabled checked />
          <Typography className={classes.grid_item_text}>
            Verified hosts and users
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.grid_item}>
          <GreenCheckbox disabled checked />
          <Typography className={classes.grid_item_text}>
            All services included
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.grid_item}>
          <GreenCheckbox disabled checked />
          <Typography className={classes.grid_item_text}>
            30 day cancellation policy
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.grid_item}>
          <GreenCheckbox disabled checked />
          <Typography className={classes.grid_item_text}>
            Our team is here to help you
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default NeedsSection;
