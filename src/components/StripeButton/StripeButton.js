import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GvJ7qF0NuOLr6QCbuLjKMP1fpEHyI1uhDSJvFNL5ClMkRKjQ3Zojp7UHsuypKORaugtFLgLL6wFiWSqxbEf7MAH008RtIWyRg';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CROWN Clothing Ltd.'
            locale='en'
            currency="USD"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            />
    );
};

export default StripeCheckoutButton;