import React from 'react'

import LoginForm from '../components/LoginForm';

const Login = () => {
    return (
        <div className='login'>
            <div className='login__left'></div>
            <div className='login__right'>
                <LoginForm />
            </div>
        </div>
    )
}

export default Login