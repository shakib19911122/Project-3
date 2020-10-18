import React from "react";
import NavBar from "../components/NavBar"
import Container from "../components/Container"
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";
// import axios from 'axios'
import DeliveryDataArea from '../components/DeliveryDataArea'


function SenderUI() {
  const history = useHistory()
  const addDelivery = () =>{
    history.push("/adddeliveries")
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
          
          <h3>Delivery</h3>
          <button
          onClick={addDelivery}
          >add delivery</button>
            <DeliveryDataArea/>
        </Container>
        <Container>
          <h3>Complete Job</h3>
        </Container>
       
      </Grid>
    </div>
  );
}


export default SenderUI