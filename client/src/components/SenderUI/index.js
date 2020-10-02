import React from "react";
import NavBar from "../NavBar"
import Container from "../Container"
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


function SenderUI (){
    
    return (
        <div>
          <NavBar />
          <br></br>

          
          <Grid container spacing={2}>
          <Container>
            <TextField required id="standard-required" label="Required"     defaultValue="Delivery address"/>
          </Container>
          <Container text = {"This Container will have all user pending delivery"}/>
          </Grid>
          
        

          
          
        </div>
      );
    }


export default SenderUI