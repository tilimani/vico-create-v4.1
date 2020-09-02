import React, { Children } from "react";
import { Button, Grid, makeStyles, Drawer } from "@material-ui/core";
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
    paddingLeft: 80
  },
  headerRightBtn: {
    paddingRight: 80
  }
}));

const RightDrawerScaffold = (props) => {
  const classes = useStyles();
  return (
    <Drawer anchor="right" open={true} className={classes.drawer}>
      <div className={classes.drawerHeader}>
        <div className={classes.headerLeftBtn}>
          <VICOTransparantButton text="Cerrar" action={props.close} />
        </div>
        <div className={classes.headerRightBtn}>
          <VICOTransparantButton text="Guadar" action={props.save} />
        </div>
      </div>

      {props.children}
    </Drawer>
  );
};

export default RightDrawerScaffold;
