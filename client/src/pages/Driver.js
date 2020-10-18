import React, {useState} from "react";
import NavBar from "../components/NavBar"
import Container from "../components/Container"
import Grid from '@material-ui/core/Grid';
import DeliveryDataArea from '../components/DeliveryDataArea'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



function SenderUI() {

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();
  const [delivyStatus, setDeliveryStatus] = useState([])
  const updateDelivery = () => {
    const apiURL = ('/api/delivery')
    fetch(apiURL, {
      body: JSON.stringify(delivyStatus),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
    })
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
          <h3 style={{color: "black"}}>Choose a Job</h3>
          <div className={classes.root}>
          <Button variant="contained"
            onClick={updateDelivery}
          >
            Confirm
          </Button>
          </div>
          <DeliveryDataArea
            delivyStatus={delivyStatus}
            setDeliveryStatus={setDeliveryStatus}
          />
        </Container>
        <Container>
          <h3 style={{color: "black"}}>Current Job</h3>
          <Button variant="contained">completed</Button>
        </Container>
        <Container>
          <h3 style={{color: "black"}}>complete Job</h3>
        </Container>
      </Grid>
    </div>
  );
}
export default SenderUI