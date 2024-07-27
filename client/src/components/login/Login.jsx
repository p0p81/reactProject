import './Login.css';
import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';



export default function Login () {

  const BASE_URL = 'http://localhost:3030/users/login';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({email, password})
            }
            )
            const data = await response.json();

            if(response.ok) {
                console.log ('Login successful:', data);
                navigate('/')
            }
        } catch (error) {
            console.log(error.message);
        }

  }
    return(
        
            <div className="form-card">
                <h2>Login</h2>
                <form onSubmit={submitHandler}>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                    />
                  </div>
                  <button type="submit">Login</button>
                </form>
                <p>
                  Don't have an account? <Link to="/register" style={{ color: 'yellow' }}>Create an account</Link>
                </p>
            
            </div>
          
    )
}





