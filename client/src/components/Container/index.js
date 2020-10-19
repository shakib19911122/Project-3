import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 5,
        marginBottom: 30,
    },
    paper: {
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: "#696969",
        height: 400,
        width: 800,
        opacity: "0.8"
    },
}));

export default function Container(props) {
    const classes = useStyles();



    return (
        <div className={classes.root}>
            <Grid 
            container spacing={5}
            direction="row"
            >
                <Grid item xs={12} sm={12}>
                    <Paper className={classes.paper}>{props.children} </Paper>
                </Grid>
            </Grid>
        </div>
    );
}