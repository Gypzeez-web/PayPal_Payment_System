import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import StripeForm from './stripeform';

const PUBLIC_KEY='pk_test_51Jfc2aKsqvt4VygRGr7GHuYcMdvmThDyLmHMPz5W6l9EVVtUVfL0TcI5oEfvnIFEFUVazuHwxT6tz2VgzzqpcwtU00nxjVWf7p';
const stripeTestPromise=loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
    return (
       <Elements stripe={stripeTestPromise}>
           <StripeForm/>
       </Elements>
    )
}
