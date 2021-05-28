import React from 'react';
import SignIn from '../../components/SignIn-Input/SignIn.component';
import SignUp from '../../components/SignUp/SignUp.component';

import './SignInPage.styles.scss';

const SignInPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInPage;