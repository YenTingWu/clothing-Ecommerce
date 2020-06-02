import React from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './SignIn.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;

        try { 
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch(error) {
            console.log(error);
        }
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        label='email'
                        autoComplete='username'
                        value={email} 
                        handleChange={this.handleChange}
                        required />
                    <FormInput 
                        name='password' 
                        type='password'
                        label='password' 
                        autoComplete='current-password'
                        value={password} 
                        handleChange={this.handleChange}
                        required />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSingIn>
                            {/* Pass isGoogleSignIn for true to the CustomButton so that we can use this property to identify how the button should display */}
                            aign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;