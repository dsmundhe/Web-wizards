import React from 'react';
import '../style/Loginpage.css';
import { useNavigate } from 'react-router-dom';

function Loginpage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signup')
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="login-btn" onClick={handleClick}>Login</button>
        </form>
        <p className="signup-text">Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
}

export default Loginpage;
