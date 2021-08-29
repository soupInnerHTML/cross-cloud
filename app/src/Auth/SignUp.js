import React from 'react';
import Auth from './index';
import {RED} from '../../styles/colors';
import auth from '../../mobx/auth';

const SignUp = () => {
    return <Auth type={'Sign up'} accentColor={RED} authAction={auth.signUp} />;
};

export default SignUp;
