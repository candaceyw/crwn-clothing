import React from 'react';
import'./signInandsignup.scss';
import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signup/SignUp';
import './signInandsignup.scss';

const SignInandSignup = (props) => (

  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
    </div>
      
  );

export default SignInandSignup;