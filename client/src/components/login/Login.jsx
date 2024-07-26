import './Login.css';
import React from 'react';
import {Link} from 'react-router-dom';

export default function Login () {
    return(
        
            <div className="form-card">
                <h2>Login</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Password" required />
                  </div>
                  <button type="submit">Login</button>
                </form>
                <p>
                  Don't have an account? <Link to="/register" style={{ color: 'yellow' }}>Create an account</Link>
                </p>
            
            </div>
          
    )
}





