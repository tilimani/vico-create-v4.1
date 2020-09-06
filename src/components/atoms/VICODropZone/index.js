import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

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
  imagesPreview: {
    display: "flex",
    flexWrap: "wrap"
  },
  imageWrapper: {
    width: 87,
    height: 80,
    borderRadius: 6,
    marginRight: 30,
    marginTop: 30,
    position: "relative"
  },
  closeIcon: {
    color: "#C4C4C4",
    height: 26,
    width: 26,
    backgroundColor: "white",
    borderRadius: "50%"
  },
  closeBtn: {
    position: "absolute",
    right: -22,
    top: -22,
    backgroundColor: "transparent"
  },
  image: {
    position: "relative",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 6
  },
  fileInput: {
    display: "none"
  },
  addMorePhotosArea: {
    width: 87,
    height: 80,
    marginRight: 30,
    marginTop: 30,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  addMorePhotosText: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    letterSpacing: "0.02em",
    textAlign: "center"
  },
  addMorePhotosIcon: {
    color: "#C4C4C4",
    height: 26,
    width: 26
  }
}));

const VICODropZone = (props) => {
  const classes = useStyles();

  const { images, setImages } = props;

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const validateFile = (file) => {
    const validTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    }
    return true;
  };

  function readFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (res) => {
        resolve(res.target.result);
        return reader.result;
      };
      reader.onerror = (err) => reject(err);
    });
  }

  const handleFiles = async (files) => {
    const array = [];
    for (let i = 0; i < files.length; i++) {
      if (validateFile(files[i])) {
        const img = await readFile(files[i]);
        array.push(img);
      } else {
        //Display error
      }
    }
    await setImages([...images, ...array]);
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files) {
      handleFiles(files);
    }
  };

  return (
    <div className={classes.dropZoneWrapper}>
      {images.length !== 0 ? (
        <div className={classes.imagesPreview}>
          {images.map((img) => (
            <div className={classes.imageWrapper}>
              <img src={img} alt="" className={classes.image} />
              <IconButton
                className={classes.closeBtn}
                onClick={() => {
                  setImages(images.filter((i) => i !== img));
                }}
              >
                <CancelIcon className={classes.closeIcon} />
              </IconButton>
            </div>
          ))}
          <input
            accept="image/*"
            className={classes.fileInput}
            id="add-more-button-file"
            multiple
            type="file"
            onChange={(e) => {
              const files = e.target.files;
              if (files) {
                handleFiles(files);
              }
            }}
          />
          <label htmlFor="add-more-button-file">
            <div className={classes.addMorePhotosArea}>
              <AddCircleOutlineIcon className={classes.addMorePhotosIcon} />
              <span className={classes.addMorePhotosText}>Agregar más</span>
            </div>
          </label>
        </div>
      ) : (
        <div
          className={`${classes.dropZone} dropzone`}
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={fileDrop}
        >
          <div className={classes.dropZoneIcon}>
            <img src={upload} alt="upload-icon" />
          </div>
          <span className={classes.dropZoneText}>Arrastra las fotos acá</span>
          <span className={classes.dropZoneText}>o</span>
          <div className={classes.dropZoneBtn}>
            <input
              accept="image/*"
              className={classes.fileInput}
              id="contained-button-file"
              multiple
              type="file"
              onChange={(e) => {
                const files = e.target.files;
                if (files) {
                  handleFiles(files);
                }
              }}
            />
            <label htmlFor="contained-button-file">
              <VICOButton
                text="Subir fotos"
                variant="outlined"
                color="primary"
                component="span"
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default VICODropZone;
