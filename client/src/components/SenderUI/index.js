import React from "react";
import NavBar from "../NavBar"
import Container from "../Container"
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import TimeFrame from "../TimeFrame"





function SenderUI() {

  return (
    <div>
      <NavBar />
      <br></br>


      <Grid container spacing={2}>
        <Container>
          <p>will have Carousel and prompt user to enter pick up address and product info</p>
          <TextField required id="standard-required" label="Required" defaultValue="Delivery address" />
          <br></br>
          <TextField
            id="standard-number"
            label="Postcode*"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br></br>
          <TextField required id="standard-required" label="additional Info" defaultValue="  " />
          <TimeFrame></TimeFrame>
        </Container>
       
      </Grid>





    </div>
  );
}


export default SenderUI