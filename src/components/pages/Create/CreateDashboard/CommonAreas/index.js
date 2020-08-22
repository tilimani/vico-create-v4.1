import React, { useContext } from "react";
import { Button, Grid } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { CreateContext } from "../../../../../common/context";

const CommonAreas = ({ tutorial }) => {
  const { changeState } = useContext(CreateContext);
  const handleClick = () => {
    changeState("createStep", 3);
  };
  return (
    <>
      <Grid container style={{ margin: "4rem", backgroundColor: "#dadada" }}>
        <Grid item xs={8}>
          <p>Common Areas</p>
          <div id="common_areas_gallery">
            Gallery container
            <Button variant="contained" color="primary">
              Subir Fotos
            </Button>
            <Button
              variant="text"
              color="secondary"
              onClick={() => {
                tutorial.next();
              }}
            >
              Omitir
            </Button>
          </div>
          <Button
            component={RouterLink}
            to="/create/dashboard/1"
            variant="contained"
            color="secondary"
          >
            Close common area
          </Button>
          {/* Tutorial step = 6*/}
          <div id="common_areas_info">
            <Button
              component={RouterLink}
              to="/create/dashboard/1"
              variant="contained"
              color="secondary"
              onClick={handleClick}
            >
              Continue
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default CommonAreas;
