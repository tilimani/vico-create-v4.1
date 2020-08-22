import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import "./style.css";

const useStyles = makeStyles(theme => ({
  card: {
    padding: "50px 40px",
    boxShadow: "0px 8px 27px rgba(0, 0, 0, 0.1)",
    borderRadius: 6,
    height: 320,
    maxWidth: 375,
    cursor: "pointer",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    [theme.breakpoints.down("md")]: {
      padding: "40px 40px"
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      padding: "30px 30px"
    }
  },
  description: {
    fontSize: 20,
    color: theme.palette.secondary.main,
    marginTop: 40,
    [theme.breakpoints.down("md")]: {
      fontSize: 15
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 20
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 16
    }
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: theme.palette.secondary.main,
    lineHeight: 1.2,
    [theme.breakpoints.down("md")]: {
      fontSize: 18
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 26
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 20
    }
  },
  card_header: {
    display: "flex",
    alignItems: "flex-end",
    position: "relative",
    height: "50%",
    [theme.breakpoints.down("md")]: {
      height: "40%"
    },
    [theme.breakpoints.down("sm")]: {
      height: "50%"
    }
  },
  card_header_image_wrapper: {
    marginRight: 20,
    position: "relative",
    width: "50%"
  },
  card_header_image: {
    float: "right",
    width: 190,
    [theme.breakpoints.down("md")]: {
      width: 120
    },
    [theme.breakpoints.down("sm")]: {
      width: 200
    },
    [theme.breakpoints.down("xs")]: {
      width: 160
    }
  },
  card_header_typo_wrapper: {
    position: "relative",
    width: "50%",
    marginBottom: 20
  },
  description_wrapper: {
    position: "relative",
    height: "50%"
  }
}));

const CardItem = props => {
  const classes = useStyles();
  const { item } = props;
  const { image, title, description, background } = item;

  return (
    <Card
      className={`${classes.card} card-item`}
      style={{
        backgroundImage: `url(${background})`
      }}
    >
      <div className={classes.card_header}>
        <div className={classes.card_header_image_wrapper}>
          <img src={image} alt={title} className={classes.card_header_image} />
        </div>
        <div className={classes.card_header_typo_wrapper}>
          <Typography component="span" className={classes.title}>
            {title}
          </Typography>
        </div>
      </div>
      <div className={classes.description_wrapper}>
        <Typography
          variant="body2"
          component="p"
          className={classes.description}
        >
          {description}
        </Typography>
      </div>
    </Card>
  );
};

export default CardItem;
