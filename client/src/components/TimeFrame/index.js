import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function TimeFrame(props) {
  const classes = useStyles();
  const [time, setTime] = React.useState('');

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Time Frame</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={time}
          onChange={handleChange}
          onClick={props.onChange}
        >
          <MenuItem  value={2}>ASAP</MenuItem>
          <MenuItem  value={4}>4 Hours</MenuItem>
          <MenuItem  value={8}>8 Hours</MenuItem>
        </Select>
      </FormControl>
    
    </div>
  );
}
