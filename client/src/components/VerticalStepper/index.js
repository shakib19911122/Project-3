import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dimension from "../Dimension"
import TimeFrame from "../TimeFrame"

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));

//set initial state
// function Delivery() {
//     const [deliveries, setDeliveries] = usestate([])
//     const [formObject, setFormObject] = useState({})

//     useEffect(() => {
//         loadDeliveries()
//     }, [])

//     function loadDeliveries() {
//         API.getDeliveries()
//             .then(res =>
//                 setDeliveries(res.data))
//             .catch(err => console.log(err));
//     };

function handleInputChange(event){
    console.log(event)
}

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
                            onChange = {handleInputChange}
                            required id="standard-required" 
                            label="Required" 
                            placeholder="Pick-up address" 
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-number"
                            label="Postcode*"
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
                        <TextField required id="standard-required" 
                        label="Required" 
                        placeholder="Delivery address" 
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-number"
                            label="Postcode*"
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
                        <Dimension />
                    </div>
                    <div>
                        <TimeFrame />
                        <TextField 
                        required id="standard-required" 
                        label="additional Info" 
                        placeholder="eg. leave at safe place" />
                    </div>

                </div>
            );
        default:
            return 'Unknown step';
    }
}

export default function VerticalLinearStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography>{getStepContent(index)}</Typography>
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
                                        onClick={handleNext}
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
                    <Typography>Now jus sit tight and wait for us to assigne Driver</Typography>
                    <Button onClick={handleReset} className={classes.button}>
                        Reset
          </Button>
                </Paper>
            )}
        </div>
    );
}
