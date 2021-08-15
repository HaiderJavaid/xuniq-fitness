import React, {useState, useEffect} from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, Box } from '@material-ui/core';
import { setThePassword } from 'whatwg-url';
import {Link, useHistory} from 'react-router-dom';

import {commerce} from '../../../lib/commerce';
import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps =['Shipping address', 'Payment details'];
const theme= {spacing: 10}

const Checkout = ({cart, order, onCaptureCheckout, error}) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const [isFinished, setIsFinished] = useState(false);
    const classes = useStyles(); 
    const history = useHistory();

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});
                                
                setCheckoutToken(token);

            } catch (error) {
                history.pushState('/');
            }
        }

        generateToken();
    }, [cart]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1 );
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1 );


    const next = (data) => {
        setShippingData(data);

        nextStep();
    }

    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true)
        }, 3000);
    }

    let Confirmation = () => order.customer ?(
        <div>
        <div>
            <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
            <Typography variant="h7">Please check your email for the receipt and tracking ID</Typography>
        <Divider className={classes.divider} />
        <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
        </div> 
        <br />
        <Button component={Link} to="/" variant="outlined" type="button" to="/">Back to home</Button>
        </div>

    ) : isFinished ? ( 
        <div>
        <div>
            <Typography variant="h5">Thank you for your purchase</Typography>
        <Divider className={classes.divider} />
        </div> 
        <br />
        <Button component={Link} to="/" variant="outlined" type="button" to="/">Back to home</Button>
        </div>
    ) : (
        <div className={classes.spinner}>
            <CircularProgress />
        </div>
    );

    if(error) {
        <div>
            <Typography variant="h5">Error : {error}</Typography>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button" to="/">Back to home</Button>

        </div>
    }

    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} next={next}/>
        : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} onCaptureCheckout={onCaptureCheckout} timeout={timeout}/>

        

    return (
        <div>
            <CssBaseline />
            
            <div classname={classes.toolbar} />
            <main className={classes.layout}>
                <Paper classname={classes.paper}>
                    <Box margin={5}>            
                    <Typography className={classes.checkout} variant='h4' align="center">CHECKOUT</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) =>(
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                        {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form/>}
                        </Box>
                </Paper>
            </main>
            
        </div>
        
    )
}

export default Checkout
