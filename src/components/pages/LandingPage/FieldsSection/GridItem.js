import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: 16,
    color: theme.palette.secondary.dark,
    textAlign: "center"
  },
  avatar: {
    width: 117,
    height: 117,
    marginBottom: "3vh",
    [theme.breakpoints.down("xs")]: {
      width: 60,
      height: 60
    }
  },
  list_item: {
    width: "auto",
    height: 200,
    display: "flex",
    flexDirection: "column",
    paddingLeft: 0,
    paddingRight: "2vw",
    [theme.breakpoints.down("xs")]: {
      height: "auto"
    }
  }
}));

const GridItem = props => {
  const classes = useStyles();
  const { title, image } = props;
  return (
    <Grid item xs={4} sm={3} md={2}>
      <ListItem className={classes.list_item}>
        <ListItemAvatar>
          <Avatar alt={title} src={image} className={classes.avatar} />
        </ListItemAvatar>
        <ListItemText
          className={classes.title}
          primary={<Typography component="span">{title}</Typography>}
        />
      </ListItem>
    </Grid>
  );
};

export default GridItem;
