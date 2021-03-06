import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../CustomButton/CustomButton.component';
import FormInput from '../FormInput/FormInput.component';
import './SignIn.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name]:value});

    }

    render() {
        return (
            <div className='signin'>
                <h2 className='title'>I already have an account.</h2>
                <span>Sign in with email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' handleChange={this.handleChange} value={this.state.email} label='email' required/>
                    <FormInput type='password' name='password' handleChange={this.handleChange} value={this.state.password} label='password' required/>

                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                    </div>
                    
                </form>
            
            </div>
        )
    }
}

export default SignIn;