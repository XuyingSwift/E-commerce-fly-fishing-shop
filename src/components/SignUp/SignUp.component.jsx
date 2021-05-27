import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../CustomButton/CustomButton.component';
import FormInput from '../FormInput/FormInput.component';

import './SignUp.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''            
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch(error) {
            console.error(error);
        }
    };

    handleChange = e => {
        const {name, value} = e.target;

        this.setState({[name]: value});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='signup'>
            <h2 className='title'>I do not have a account.</h2>
            <span>Sign up with email and password</span>

            <form className='signUpForm' onSubmit={this.handleSubmit}>
                <FormInput 
                    type='text'
                    name='displayName'
                    vaule={displayName}
                    onChange={this.handleChange}
                    lable='DisplayName'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required
                />
                <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    requiried
                />
                <FormInput
                    type='password'
                    name='comfirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    requiried
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </div>
        )
        
    }
}

export default SignUp;