import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '10ch',
    },
  },
}));



export default function Dimension() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
      <div>
      
        <TextField
          id="outlined-number"
          label="Length (cm)"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
          <TextField
          id="outlined-number"
          label="Width (cm)"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
          <TextField
          id="outlined-number"
          label="Height (cm)"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
         <TextField
          id="outlined-number"
          label="Weight (kg)"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
     
      </div>
    </form>
  );
}
