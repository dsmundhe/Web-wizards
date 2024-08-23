import React from 'react';
import '../style/SignupPage.css';

function SignupPage() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm your password" />
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p className="login-text">Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
}

export default SignupPage;
