import React from "react";
import { makeStyles } from "@material-ui/core";

import Dropzone from "react-dropzone";

import upload from "../../../assets/upload.png";
import VICOButton from "../VICOButton";

import "./index.css";

const useStyles = makeStyles((theme) => ({
  dropZone: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 261,
    marginTop: 40
  },
  dropZoneIcon: {
    marginBottom: 10,
    marginTop: 10
  },
  dropZoneBtn: {
    marginTop: 20,
    width: 261
  },
  dropZoneText: {
    fontSize: 16,
    color: theme.palette.secondary.main
  },
  input: {
    display: "none"
  }
}));

const VICODropZone = () => {
  const classes = useStyles();

  return (
    <div>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <div className={`${classes.dropZone} dropzone`}>
        <div className={classes.dropZoneIcon}>
          <img src={upload} alt="upload-icon" />
        </div>
        <span className={classes.dropZoneText}>Arrastra las fotos acá</span>
        <span className={classes.dropZoneText}>o</span>
        <label className={classes.dropZoneBtn} htmlFor="contained-button-file">
          <VICOButton text="Subir fotos" variant="outlined" color="primary" />
        </label>
      </div>
    </div>
  );
};

export default VICODropZone;
