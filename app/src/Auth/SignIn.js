import React from 'react';
import Auth from './index';
import {BLUE} from '../../styles/colors';
import auth from '../../mobx/auth';

const SignIn = () => {
    return (
        <Auth type={'Sign in'} accentColor={BLUE} authAction={auth.signIn} />
    );
};

export default SignIn;
