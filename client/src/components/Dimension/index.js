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



export default function Dimension(props) {
  const classes = useStyles();
  

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
      <div>
      
        <TextField
          onChange={props.onChange}
          required
          id="length"
          label="Length (cm)"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
          <TextField
          onChange={props.onChange}
          required
          id="width"
          label="Width (cm)"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
          <TextField
          onChange={props.onChange}
          required
          id="height"
          label="Height (cm)"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
         <TextField
          onChange={props.onChange}
          required
          id="weight"
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
