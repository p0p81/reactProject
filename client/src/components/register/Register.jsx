import React, { useContext, useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../context/authContext';

export default function Register() {

  const BASE_URL = 'http://localhost:3030/users/register';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const navigate = useNavigate();
  const {changeAuthState} = useContext(authContext);
  const [error, setError] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      setError('Password mismatch')
      return
    }

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
        localStorage.setItem('accessToken', data.accessToken);
        changeAuthState(data);
          navigate('/')
      } else {
        setError(data.message || 'Error, please try again!');
      }
  } catch (error) {
      setError('Error, please try again!')
  }

  }

  return (
    <div className="form-card">
      <h2>Register</h2>
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
          <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password:</label>
                    <input 
                        type="password" 
                        id="rePassword" 
                        name="rePassword" 
                        placeholder="Confirm Password" 
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                        required 
                    />
          </div>
          {error &&
              <div className='error-msg'>{error}</div>
          }
          <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login" style={{ color: 'yellow' }}>Login</Link>
      </p>
    </div>
  );
}
