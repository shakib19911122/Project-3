import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from "axios";
// import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: "#696969",
        height: 300,
        opacity: "0.8"

    },
}));

export default function Container(props) {
    const classes = useStyles();

    axios.get('http://localhost:3001/packages')
        .then((response) => console.log(response))

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={10}>
                    <Paper className={classes.paper}>{props.text}{props.children} </Paper>
                    
                </Grid>
            </Grid>
        </div>
    );
}