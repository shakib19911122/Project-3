import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkboxes(props) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    props.onClick(event)
  };

  return (
    <div>
      <Checkbox
        name={props.name}
        // onclick={props.onClick}
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
  );
}
