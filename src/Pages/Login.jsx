import React, { useState } from 'react';
import BackButton from '../Components/BackButton';
import './Styles/Login.css';
import swal from 'sweetalert2';

function Login() {
  // Admin credentials
  const adminEmail = 'admin@mail.com';
  const adminPassword = 'admin';

  let [inputEmail, setInputEmail] = useState('');
  let [inputPassword, setInputPassword] = useState('');

  const checkCredentials = (e) => {
    // Prevent the page to reload when submitting a form
    e.preventDefault();

    // Check if user email match with admin
    if (adminEmail !== inputEmail)
      return new swal('Oops!', 'Email is incorrect.', 'error');

    // Check if user password match with admin
    if (adminPassword !== inputPassword)
      return new swal('Oops!', 'Password is incorrect.', 'error');

    // Proceed to next page if user credentials matched to admin
    return new swal('Welcome!', 'Login sucessful!', 'success').then(() => {
      window.location = '/pokedex';
    });
  };

  return (
    <>
      <div className="login-body">
        <h1 className="login-header">Login</h1>
        <div className="from-card">
          <form
            onSubmit={(e) => {
              checkCredentials(e);
            }}
          >
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="sample@mail.com"
              maxLength={100}
              required
              onChange={(e) => {
                setInputEmail(e.target.value);
              }}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your Password"
              maxLength={100}
              required
              onChange={(e) => {
                setInputPassword(e.target.value);
              }}
            />
            <button type="submit" name="button">
              Submit
            </button>
          </form>
        </div>
        <BackButton />
      </div>
    </>
  );
}

export default Login;
