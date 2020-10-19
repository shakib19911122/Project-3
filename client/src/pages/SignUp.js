import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import UserSelect from "../components/UserSelect";
import axios from 'axios';
import { useHistory } from "react-router-dom";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [sighUpEmail, setSignUpEmail] = useState("");
  const [sighUpPassword, setSignUpPassword] = useState("");
  const [userExist, setUserExist] = useState("");
  const [userType, setUserType] = useState("");
  const history = useHistory();
  
  const signUpUser = (e) => {
    e.preventDefault()
    axios({
      method: "post",
      data: {
        email: sighUpEmail,
        password: sighUpPassword,
        userType: userType
      },
      withCredentials: true,
      url: "/api/signup",
      
    }).then((res) => {
      
      console.log(res)
      if (res.data === "User Already Exists"){
        setUserExist("User Already Exists");
        setSignUpEmail("");
        setSignUpPassword("");
      } else {
        history.push("/")
      }
    });

  };
 

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
     
            <Grid item xs={12}>
              <TextField
                value={sighUpEmail}
                onChange={e => setSignUpEmail(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="email"
                placeholder="email"
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={sighUpPassword}
                onChange={e => setSignUpPassword(e.target.value)}
                variant="outlined"
                required
                fullWidth
                label="password"
                type="password"
                id="password"
              
              />
            </Grid>

            <UserSelect 
            onChange={e => setUserType(e.target.value)}
            value={userType}
           
            />

          </Grid>
          <Button
            onClick={signUpUser}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
  <h3>{userExist}</h3>
        
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}