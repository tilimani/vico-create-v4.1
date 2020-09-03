import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dropZone: {}
}));

const VICODropZone = () => {
  const classes = useStyles();
  return <div className={classes.dropZone}>VICO DropZone</div>;
};

export default VICODropZone;
