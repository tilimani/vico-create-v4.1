import React from "react";
import { makeStyles } from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";

import VICODropZone from "../../../../atoms/VICODropZone";
import VICOButton from "../../../../atoms/VICOButton";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative"
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(33, 33, 33, 0.83)",
    transition: "background-color 0.5s",
    opacity: ".7",
    zIndex: 1900
  },
  title: {
    fontSize: 20,
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 16,
    color: theme.palette.secondary.main
  },
  tips: {
    color: theme.palette.secondary.main,
    marginTop: 46,
    marginBottom: 40
  },
  tipsTitle: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    marginTop: 30,
    fontWeight: "bold"
  },
  tipItem: {
    display: "flex",
    marginTop: 10
  },
  tipItemCheckIcon: {
    color: "#07A529",
    width: 16,
    marginRight: 10
  },
  tipItemCloseIcon: {
    color: "#D64040",
    width: 16,
    marginRight: 10
  },
  tipItemText: {
    fontSize: 16,
    color: theme.palette.secondary.main
  },
  saveBtnWrapper: {
    textAlign: "center"
  }
}));

const Gallery = (props) => {
  const classes = useStyles();

  const { title, subtitle, images, setImages, tutorial } = props;
  return (
    <div id="room_edit_gallery" className={classes.container}>
      {props.isOverlayed && <div className={classes.overlay}></div>}
      <span className={classes.title}>{title}</span>
      <p className={classes.subtitle}>{subtitle}</p>

      <VICODropZone images={images} setImages={setImages} />
      {images.length !== 0 && (
        <div className={classes.saveBtnWrapper}>
          <VICOButton
            onClick={props.goNext}
            variant="contained"
            color="primary"
            text="Guardar"
            style={{
              width: 267,
              marginTop: 46
            }}
          />
        </div>
      )}

      <div className={classes.tips}>
        <span className={classes.tipsTitle}>Tips rápidos:</span>
        <div>
          <div className={classes.tipItem}>
            <CheckIcon className={classes.tipItemCheckIcon} />
            <span className={classes.tipItemText}>
              Estas fotos son para mostrar la habitación#1
            </span>
          </div>

          <div className={classes.tipItem}>
            <CheckIcon className={classes.tipItemCheckIcon} />
            <span className={classes.tipItemText}>
              Ordena los espacios y recoge los objetos del piso y la cocina.
            </span>
          </div>

          <div className={classes.tipItem}>
            <CheckIcon className={classes.tipItemCheckIcon} />
            <span className={classes.tipItemText}>
              Las fotos horizontales funcionan mejor..
            </span>
          </div>

          <div className={classes.tipItem}>
            <CloseIcon className={classes.tipItemCloseIcon} />
            <span className={classes.tipItemText}>
              Evita fotos oscuras y borrosas.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
