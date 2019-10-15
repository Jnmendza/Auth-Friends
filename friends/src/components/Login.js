import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {
    console.log(props);

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        setUser({
            credentials: {
                ...user.credentials,
                [e.target.name]: e.target.value
            }
        })
    };

    const handleClick = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', user.credentials)
    }

    
        return(
            <>
                <h1>Login</h1>
                <form>
                    <input 
                        type='text'
                        name='Username' 
                        placeholder='Username' 
                        id='username' 
                        onChange={handleChange}
                    ></input>

                    <input 
                        type='text'
                        name='Password' 
                        placeholder='Password' 
                        id='password' 
                        onChange={handleChange}
                    ></input>

                    <button onClick={handleClick}>Submit</button>
                </form>
            </>
        )
    
}

export default Login;

