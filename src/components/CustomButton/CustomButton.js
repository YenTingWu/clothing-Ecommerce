import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ children, isGoogleSingIn, ...otherProps }) => (
    <button className={`${isGoogleSingIn ? 'google-sign-in' : ''} custom-button`}  {...otherProps}>
        {children}
    </button>
);

export default CustomButton;