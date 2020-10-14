import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {useHistory} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
    
  },
  title: {
    flexGrow: 1,
  },
  root2: {
    backgroundColor: '#1B1B1B',
    opacity: "0.9"
  },
 
 
}));

export default function NavBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory()

  const handleLoggedOut = (event) => {
    setAuth(event.target.checked);
    history.push('/')
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          className={classes.switch}
          control={<Switch checked={auth} onChange={handleLoggedOut} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static" className={classes.root2}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Hi : (user ID)
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Pending Job</MenuItem>
                <MenuItem onClick={handleClose}>History</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
