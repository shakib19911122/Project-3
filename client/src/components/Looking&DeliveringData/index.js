import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import Checkboxes from '../CheckBox'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
    PickUpAddress, 
    PickUpPostcode, 
    DeliverTo, 
    DeliverPostcode, 
    TimeFrame, 
    AdditionalInfo, 
    Status) {
  return { 
      PickUpAddress, 
      PickUpPostcode, 
      DeliverTo, 
      DeliverPostcode,
      TimeFrame, 
      AdditionalInfo, 
      Status 
    };
}

createData()

export default function BasicTableLookingDelivering({ delivyStatus, setDeliveryStatus }) { // ask this
  const [deliveryList, setDeliveryList] = useState([])
  const [delivering, setDelivering] = useState([])
  const classes = useStyles();

  function handelTickBoxChange (event){
    const { name, value, checked } = event.target;
    if(checked === true) {
      setDeliveryStatus({...delivyStatus, [name]: "Delivering"})
    }
    else {
      const {name, ...newDeliveries } = delivyStatus
      setDeliveryStatus(newDeliveries);
    }
  }

  const fetchDeliveries = () =>{
    const apiURL = ('/api/delivery')
    fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      setDeliveryList(data)
      const deliveringJobs = data.filter(job => job.deliveryStatus === 'looking for Driver' || "Delivering")
      setDelivering(deliveringJobs)
    });
  }

  useEffect(()=>{
    fetchDeliveries()
  },[delivyStatus])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Pick up Address </TableCell>
            <TableCell>Postcode</TableCell>
            <TableCell>Delivery Address</TableCell>
            <TableCell>Postcode</TableCell>
            <TableCell>Time-Frame</TableCell>
            <TableCell>Additional info</TableCell>
            <TableCell>Status (pending, Delivered)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          { delivering.map((row) => {
            return(
              <TableRow  key={row.pickUpAddress}>
                <TableCell component="th" scope="row">
                  {row.pickUpAddress}
                </TableCell>
                <TableCell align="right">{row.pickUpPostcode}</TableCell>
                <TableCell align="right">{row.deliveryAddress}</TableCell> 
                <TableCell align="right">{row.deliveryPostcode}</TableCell>
                <TableCell align="right">{row.timeFrame}</TableCell>
                <TableCell align="right">{row.additionalInfo}</TableCell>
                <TableCell align="right">{row.deliveryStatus}</TableCell>
                {
                // <Checkboxes
                //   name={row._id}
                //   onClick={handelTickBoxChange}
                // />
                }
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}