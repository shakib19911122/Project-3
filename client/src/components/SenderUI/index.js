import React from "react";
import NavBar from "../NavBar"
import Container from "../Container"
// import Grid from '@material-ui/core/Grid';
import VerticalLinearStepper from "../VerticalStepper"



function SenderUI() {

  return (
    <div>
      <NavBar />
      <br/>  
      <Container>
        <div>
         <VerticalLinearStepper/>
        </div>
      </Container>
       
    </div>
  );
}


export default SenderUI