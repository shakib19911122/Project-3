import React from "react";
import NavBar from "../NavBar"
import Container from "../Container"
import Grid from '@material-ui/core/Grid';
import VerticalLinearStepper from "../VerticalStepper"



function SenderUI() {

  return (
    <div>
      <NavBar />
      <br></br>
      <Grid container spacing={2}>
        <Container>
            <VerticalLinearStepper/>
        </Container>
      </Grid>
    </div>
  );
}


export default SenderUI