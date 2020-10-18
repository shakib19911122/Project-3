import React from "react";
import NavBar from "../components/NavBar"
import Container from "../components/Container"
import Grid from '@material-ui/core/Grid';
import DeliveryDataArea from '../components/DeliveryDataArea'
import axios from 'axios'



function SenderUI() {

  const updateStatus = ()=>{
    axios({
      method: 'PUT',
      data:{
        id: ""
      },
      deliveryStatus: "Delivering",
      url: "/api/delivery"
       }
    )}
  
  
  function handleStatusSubmit(event){
    updateStatus(event)

  }

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
          <h3>Choose a Job</h3>
          <button
          onClick={handleStatusSubmit}
          >confrim</button>
          <DeliveryDataArea/>
          
        </Container>
        
        <Container>
          <h3>Current Job</h3>
          <button>completed</button>
        </Container>
        
        <Container>
          <h3>complete Job</h3>
        </Container>


      </Grid>

    </div>
  );
}


export default SenderUI