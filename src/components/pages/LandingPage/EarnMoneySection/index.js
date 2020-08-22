import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  earn_money_section: {
    padding: "0 18vw",

    [theme.breakpoints.down("sm")]: {
      padding: "0 8vw"
    }
  },
  card: {
    padding: "50px 0px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 10,
    height: 390,
    display: "flex",
    border: "1px solid rgba(196, 196, 196, 0.35)",
    margin: "auto",
    marginTop: "10vh",
    [theme.breakpoints.down("sm")]: {
      padding: "50px 0px",
      width: "100%",
      height: "auto"
    }
  },
  description_wrapper: {
    position: "relative",
    width: "50%",
    padding: "50px 0px 0px 70px",
    [theme.breakpoints.down("md")]: {
      padding: "25px 0px 0px 25px"
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px 40px",
      width: "100%"
    },
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      paddingLeft: 12,
      paddingRight: 12
    }
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: 1.2,
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: 42
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 30
    }
  },
  highlighter: {
    position: "relative"
  },
  orange_hightLighter: {
    position: "absolute",
    top: -10,
    left: 0,
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  description: {
    fontSize: 16,
    marginTop: "4vh",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("md")]: {
      marginTop: "2vh"
    }
  },
  image_wrapper: {
    position: "relative",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: "0px 70px",
    [theme.breakpoints.down("md")]: {
      padding: "0px 25px 0px 0px"
    },
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  image: {
    [theme.breakpoints.down("md")]: {
      width: 300
    }
  },
  upload_button: {
    height: 58,
    width: "80%",
    borderRadius: 12,
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 40,
    float: "left",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  }
}));
const EarnMoneySection = () => {
  const classes = useStyles();
  const isMobileScreen = useMediaQuery("(max-width:960px)");
  // const upload = () => {
  //   //upload
  // };
  return (
    <div className={classes.earn_money_section}>
      <Card className={classes.card}>
        <div className={classes.description_wrapper}>
          <Typography
            component="span"
            className={classes.title}
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            {`Earn `}
            <span className={classes.highlighter}>
              {`money `}
              <img
                src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/f0YW-orangeHighlighter3.png"
                alt=""
                className={classes.orange_hightLighter}
              />
            </span>
            by sharing your home
          </Typography>
          {isMobileScreen && (
            <div style={{ marginTop: "2vh", textAlign: "center" }}>
              <img
                src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/RjnS-manager.png"
                alt="manager"
                className={classes.image}
              />
            </div>
          )}
          <Typography
            variant="body2"
            component="p"
            className={classes.description}
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Manage your properties efficiently and turn them into a profit by
            becoming a host, you became part of our family.
          </Typography>
          <Button
            component={RouterLink}
            to="/create"
            variant="contained"
            color="secondary"
            className={classes.upload_button}
          >
            Upload my rooms
          </Button>
        </div>
        <div className={classes.image_wrapper}>
          <img
            src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/RjnS-manager.png"
            alt="manager"
            className={classes.image}
          />
        </div>
      </Card>
    </div>
  );
};

export default EarnMoneySection;
