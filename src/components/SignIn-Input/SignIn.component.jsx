import React from 'react';
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
                <h2>I already have an account.</h2>
                <span>Sign in with email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' handleChange={this.handleChange} value={this.state.email} label='email' required/>
                    <FormInput type='password' name='password' handleChange={this.handleChange} value={this.state.password} label='password' required/>
            
                    <CustomButton type='submit'> Sign in </CustomButton>
                </form>
            
            </div>
        )
    }
}

export default SignIn;