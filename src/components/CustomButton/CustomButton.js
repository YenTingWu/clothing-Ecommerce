import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ children, isGoogleSingIn, inverted, ...otherProps }) => (
    <button className={`
        ${inverted ? 'inverted' : ''} 
        ${isGoogleSingIn ? 'google-sign-in' : ''} 
        custom-button
        `}  
        {...otherProps}>
        {children}
    </button>
);

export default CustomButton;