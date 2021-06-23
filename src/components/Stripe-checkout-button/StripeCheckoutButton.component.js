import React from 'react';
import StripCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J5cKZGlT44wAkhvDU6vd8TcmBFTVRj2zuWwmUM2WQcOf4pimDfNbg0s5jYaWNB9TP7zaHLQDtAw4Sc63Hj7WAct003gmIKq0N';

    const onToken = token => {
        console.log(token);
        alert('payment successful')
    }

    return (
        <StripCheckout
            label="Pay Now"
            name="Fly-fishing shop"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`You are total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;