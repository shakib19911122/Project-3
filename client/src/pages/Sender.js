import React from "react";
import NavBar from "../components/NavBar"
import Container from "../components/Container"
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import BasicTableLookingDelivering from '../components/Looking&DeliveringData'
import BasicTableDelivered from '../components/CompleteDataArea'

function SenderUI() {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();
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
          
          <h3 style={{color: "black"}}>Delivery</h3>
          <div className={classes.root}>
          <Button variant="contained"
          onClick={addDelivery}
          >add delivery</Button>
          </div>
            <BasicTableLookingDelivering/>
        </Container>
        <Container>
          <h3 style={{color: "black"}}>Complete Job</h3>
          <BasicTableDelivered></BasicTableDelivered>
        </Container>
       
      </Grid>
    </div>
  );
}


export default SenderUI