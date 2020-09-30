import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default function UserSelect() {
  const classes = useStyles();
  const [user, setUser] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">
          Sender or Driver
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={user}
          onChange={handleChange}
        >
          <MenuItem value=""></MenuItem>
          <MenuItem value={10}>Sender</MenuItem>
          <MenuItem value={20}>Driver</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}