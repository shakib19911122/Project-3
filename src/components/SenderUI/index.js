import React from "react";
import NavBar from "../NavBar"
import Container from "../Container"
import Grid from '@material-ui/core/Grid';


function SenderUI (){
    
    return (
        <div>
          <NavBar />
          <br></br>

          <Grid container spacing={0}>
            
          <Container text = {"This container will let user input delivery address"}/>
          <Container text = {"This Container will have all user pending delivery"}/>
          </Grid>
        

          
          
        </div>
      );
    }


export default SenderUI