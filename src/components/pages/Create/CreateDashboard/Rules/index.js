import React from "react";
import { Button, Grid, Drawer, makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const drawerWidth = 750;
const useStyles = makeStyles((theme) => ({
  drawer: {
    marginTop: 20,
    borderRadius: "12px 0 0 12px"
  },
  drawerContent: {
    width: drawerWidth,
    flexShrink: 0
  }
}));
const Rules = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      anchor="right"
      open={true}
      className={classes.drawer}
      onClose={() => handleDrawerClose()}
    >
      <div className={classes.drawerContent}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </p>
      </div>
    </Drawer>
  );
};

export default Rules;

// <Grid container style={{ margin: "4rem", backgroundColor: "#dadada" }}>
//   <Grid item xs={8}>
//     <div className=".my-first-step">
//       <p>Rules</p>
//       <Button
//         component={RouterLink}
//         to="/create/dashboard/1"
//         variant="contained"
//         color="secondary"
//       >
//         Close Rules
//       </Button>
//       <Button
//         component={RouterLink}
//         to="/create/dashboard/1/services"
//         variant="contained"
//         color="secondary"
//       >
//         Continue
//       </Button>
//     </div>
//   </Grid>
// </Grid>
