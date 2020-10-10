import React from "react";
import NavBar from "../NavBar"
import Container from "../Container"
import Grid from '@material-ui/core/Grid';
import VerticalLinearStepper from "../VerticalStepper"



function SenderUI() {

  return (
    <div>
      <NavBar />
      <br />
      <Grid 
      container
      direction="row"
      justify="center"
      >
        <Container>
          <div>
          <h3>Delivery</h3>
          <VerticalLinearStepper />
          </div>
        </Container>
        <Container>
          <h3>Pending delivery</h3>
        </Container>
        <Container>
          <h3>Total Driver</h3>
        </Container>
      </Grid>
    </div>
  );
}


export default SenderUI