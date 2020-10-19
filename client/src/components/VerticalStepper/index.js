import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import TimeFrame from "../TimeFrame"
import { useHistory } from "react-router-dom";
import axios from "axios"


const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        opacity: '0.8',
        maxHeight: "300"
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
        color: "lightgreen",
        backgroundColor: "black"


    },
    actionsContainer: {
        marginBottom: theme.spacing(2),



    },
    resetContainer: {
        padding: theme.spacing(3),
        backgroundColor: "lightgreen"
    },
}));

export default function VerticalLinearStepper() {
 
    const [jobObject, setJobObject] = useState({})
    const [formObject, setFormObject] = useState({})
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
        setJobObject({...jobObject, [name]: value})
    };

    const postDelivery = (data) =>{
        axios({
            method: "POST",
            data: data,
            url:"/api/delivery"
        })
    }
    const postJob = (data) =>{
        axios({
            method: "POST",
            data: data,
            url:"/api/job"
        })
    }

    const history = useHistory()
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const backToHomePage = () =>{
        history.push("/senderui")

    }
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(formObject);
        postDelivery(formObject);
        postJob(formObject);
        handleNext();
        
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    function getSteps() {
        return ['Pick up Address', 'Delivery Address', 'Parcel Info'];
    }

    function getStepContent(step) {

        switch (step) {
            case 0:
                return (
                    <form>
                        <div>
                            <TextField
                                name="pickUpAddress"
                                onChange={handleInputChange}
                                required
                                id="pickUpAddress"
                                label="Address"
                                placeholder="Pick-up address"

                            />

                        </div>
                        <div>
                            <TextField
                                name="pickUpPostcode"
                                onChange={handleInputChange}
                                required
                                id="pickUpPostcode"
                                label="Postcode"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                    </form>
                );
            case 1:
                return (
                    <div>
                        <div>
                            <TextField
                                name="deliveryAddress"
                                onChange={handleInputChange}
                                required
                                id="deliveryAddress"
                                label="Address"
                                placeholder="Delivery address"
                            />
                        </div>
                        <div>
                            <TextField
                                name="deliveryPostcode"
                                onChange={handleInputChange}
                                required
                                id="deliveryPostcode"
                                label="Postcode"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div>

                        <div>
                            <TimeFrame
                                name="timeFrame"
                                onChange={handleInputChange}
                                required
                                id="deliveryTime"
                            />
                            <TextField
                                name="additionalInfo"
                                onChange={handleInputChange}
                                id="info"
                                label="Additional-Info"
                                placeholder="eg. leave at safe place" />
                        </div>

                    </div>
                );
            default:
                return 'Unknown step';
        }
    }



    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography component="span">{getStepContent(index)}</Typography>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={activeStep === steps.length - 1 ? handleFormSubmit : handleNext}
                                        // onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>Sit tight and wait for us to assign Driver</Typography>
                    <Button onClick={handleReset} className={classes.button}>
                        New Delivery
                    </Button>
                    <Button onClick={backToHomePage} className={classes.button}>
                        Home Page
                    </Button>
                </Paper>
            )}
        </div>
    );
}
