import React, { useState } from 'react'

import firebase from '../Firebase'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)
    const [password, setPassword] = useState('')

    const loginUser = async (event) => {
        event.preventDefault()
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(result => {
            console.log(result)
        }).catch(error => {
            // The error is being saved in state, so this could be displayed to the user.
            setError(error)
        })
    }

    return (
        <form className='login-form' onSubmit={(event) => loginUser(event)}>
            {/* If there is an authentication error, this is shown to the user.  */}
            <p>{error && error.message}</p>
            <div className='form-group'>
                <label>Email</label>
                <input className='form-control' onChange={(event) => setEmail(event.target.value)} type='text' placeholder='Email' value={email}></input>
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input className='form-control' onChange={(event) => setPassword(event.target.value)} type='password' placeholder='Password' value={password}></input>
            </div>
            <button className='btn login-form__submit' type='submit'>Login</button>
        </form>
    )
}

export default LoginForm