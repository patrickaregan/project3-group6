import "./login.scss";
import Auth from '../../utils/auth';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations'

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();
  
    try {
      const { data } = await login({
        variables: { ...formState }
      });
    
      Auth.login(data.login.token);
      console.log("Login successful for: " + formState.email);

    } catch (e) {
      console.error(e);
    }
  };
  
  return (
    <div className="Login">
      <div className="Hero" />
      <div className="Container">
        <div className="left">
          <div className="loginContainer">
          <form onSubmit={handleFormSubmit}>
            <h2>Log In</h2>
            <input
              type="text"
              className="username"
              placeholder="Email"
              name='email'
              id="email"
              value={formState.email}
              onChange={handleChange}
            />
            <input
              type="password"
              className="password"
              placeholder="Password"
              name='password'
              id="password"
              value={formState.password}
              onChange={handleChange}
            />
            <button type="submit" id="loginButton" onSubmit={handleFormSubmit}>
              Log In
            </button>
            </form>
            <h4>
              Or sign up <a href="signup">here</a>
            </h4>
          </div>
        </div>
        <div className="right">
          <h2>INPUT CAROSEL HERE</h2>
        </div>
      </div>
    </div>
  );
}

export default Login;