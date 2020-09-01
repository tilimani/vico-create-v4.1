import React from "react";
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

const menuData = [
  {
    icon:
      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/2WrC-home1.png",
    title: "Mis VICOs"
  },
  {
    icon:
      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/EpZk-reservation.png",
    title: "Reservas"
  },
  {
    icon:
      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/BldZ-messages.png",
    title: "Mensajes"
  },
  {
    icon:
      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/Oj3o-citas.png",
    title: "Citas"
  },
  {
    icon:
      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/b6D4-heart1.png",
    title: "Referidos"
  },
  {
    icon:
      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/zo4p-pages.png",
    title: "Pagos"
  }
];

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#fbf7f4",
    padding: 60,
    boxShadow: "10px 3px 7px -4px rgb(174 167 161 / 65%)",
    marginRight: 5,
    position: "relative",
    height: "100%"
  },
  title: {
    fontSize: 20,
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  },
  userProfile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  profileImage: {
    width: 147
  },
  name: {
    fontSize: 18,
    color: theme.palette.primary.main,
    marginTop: 6
  },
  description: {
    fontSize: 18,
    color: theme.palette.secondary.light,
    marginTop: 6
  },
  editProfile: {
    marginTop: 20,
    color: theme.palette.secondary.main,
    fontSize: 18,
    display: "flex",
    justifyContent: "flex-end"
  },
  divider: {
    width: "100%",
    height: 2,
    backgroundColor: "#C4C4C4",
    marginTop: 30,
    marginBottom: 30
  },
  listTextItem: {
    fontSize: 20,
    color: theme.palette.secondary.main
  }
}));

const LeftMenu = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <span className={classes.title}>Mi perfil</span>
      <div className={classes.userProfile}>
        <img
          src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/CoqH-Ellipse.png"
          alt="profile-img"
          className={classes.profileImage}
        />
        <span className={classes.name}>Agathe Alzate</span>
        <span className={classes.description}>Anfitrion</span>
        <span className={classes.description}>45 años</span>
      </div>
      <div className={classes.editProfile}>
        <span>Editar perfil</span>
      </div>
      <div className={classes.divider}></div>

      <List>
        {menuData.map((item, index) => (
          <ListItem button key={item.title}>
            <ListItemIcon>
              <img src={item.icon} alt="icon" />
            </ListItemIcon>
            <ListItemText
              primary={item.title}
              className={classes.listTextItem}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default LeftMenu;
