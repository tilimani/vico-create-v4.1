import React from "react";
import { makeStyles, TextField, withStyles } from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";

import VICODropZone from "../../../../atoms/VICODropZone";
import VICOButton from "../../../../atoms/VICOButton";

const useStyles = makeStyles((theme) => ({
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

const CustomTextField = withStyles((theme) => ({
  root: {
    height: 81,
    width: 406,
    borderRadius: 6,
    boxShadow: "0px 2px 4px rgba(239, 142, 5, 0.53)"
  }
}))(TextField);

const Gallery = (props) => {
  const classes = useStyles();

  const { images, setImages, tutorial } = props;
  return (
    <div id="room_edit_gallery">
      <span className={classes.title}>Galeria habitación 1</span>
      <p className={classes.subtitle}>Sube mínimo 3 fotos de la habitación.</p>

      <VICODropZone images={images} setImages={setImages} />
      {images.length !== 0 && (
        <div className={classes.saveBtnWrapper}>
          <VICOButton
            // component={RouterLink}
            // to="/create/dashboard/1"
            onClick={() => tutorial.next()}
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
