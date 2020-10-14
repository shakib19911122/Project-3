import React from "react";
import NavBar from "../components/NavBar"
import Container from "../components/Container"
import Grid from '@material-ui/core/Grid';


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
          <h3>Current Job</h3>
        </Container>
        <Container>
          <h3>Task complete</h3>
        </Container>
        <Container>
          <h3>choose a Job</h3>
        </Container>


      </Grid>

    </div>
  );
}


export default SenderUI