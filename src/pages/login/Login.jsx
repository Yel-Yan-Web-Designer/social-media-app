import React from 'react';
import './style.css';

const login = () => {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h1 className="login-title">Social Media</h1>
          <h3 className="login-subtitle">
            Connect with friends and the world <br/>around you on Social Media.
          </h3>
        </div>
        <div className="login-right">
          <div className="login-right-box">
            <input type="text" className="mail" placeholder='Email'/>
            <input type="text" className="password" placeholder='Password'/>
            <button className="login-btn">Log In</button>
            <h6 className="forgot">Forgot Password?</h6>
            <button className='create-btn'>Create New Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login