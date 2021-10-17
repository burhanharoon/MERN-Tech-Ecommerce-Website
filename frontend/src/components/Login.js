import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { loginUser } from '../actions/userActions'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const user = useSelector(state => state.userLogin)
    const handleLogin = (e) => {
        e.preventDefault()
        console.log("object");
        dispatch(loginUser(email, password))
    }
    console.log(user);
    return (
        <div>
            <h1>Email</h1>
            <input value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <h1>Password</h1>
            <input value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <button onClick={handleLogin}>Sign IN</button>

        </div>
    )
}

export default Login
