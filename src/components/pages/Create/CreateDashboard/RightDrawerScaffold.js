import React, { Children, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles, Drawer, withStyles, Button } from "@material-ui/core";
import VICOTransparantButton from "../../../atoms/VICOTransparantButton";

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    width: "100%",
    marginTop: 20
  },
  headerLeftBtn: {
    paddingLeft: 40,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingTop: 10
    }
  },
  headerRightBtn: {
    paddingRight: 40,
    [theme.breakpoints.down("sm")]: {
      paddingRight: 0,
      paddingTop: 10
    }
  }
}));

const CustomDrawer = withStyles((theme) => ({
  root: {
    zIndex: "80 !important"
  },
  paper: {
    overflowY: "auto !important",
    [theme.breakpoints.down("sm")]: {
      position: "relative !important"
    }
  }
}))(Drawer);

const RightDrawerScaffold = (props) => {
  const classes = useStyles();

  return (
    <CustomDrawer anchor="right" open={true} className={classes.drawer}>
      <div className={classes.drawerHeader}>
        <div className={classes.headerLeftBtn}>
          <VICOTransparantButton
            component={RouterLink}
            to="/create/dashboard/1"
            text="Cerrar"
            action={props.close}
          />
        </div>
        <div className={classes.headerRightBtn}>
          <VICOTransparantButton text="Guadar" action={props.save} />
        </div>
      </div>

      {props.children}
    </CustomDrawer>
  );
};

export default RightDrawerScaffold;
