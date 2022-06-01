import "./signup.scss";
import Auth from '../../utils/auth';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations'

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

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
  
    // use try/catch instead of promises to handle errors
    try {
      const { data } = await addUser({
        variables: { ...formState }
      });
    
      Auth.login(data.addUser.token);
      console.log("Signup successful for: " + formState.email);
      
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="signup">
      <div className="form">
      <form onSubmit={handleFormSubmit}>
        <h2>Sign Up</h2>
        <div className="form-item">
          <input
            type="text"
            className="username"
            placeholder="Username"
            name="username"
            id="username"
            value={formState.username}
            onChange={handleChange}
          />
        </div>
        <input
            className='email'
            placeholder='email'
            name='email'
            type='email'
            id='email'
            value={formState.email}
            onChange={handleChange}
        />
        <div className="form-item">
          <input
            type="password"
            className="password"
            placeholder="Password"
            name='password'
            id="password"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" id="loginButton">
          Sign Up
        </button>
        </form>
        {error && <div>Sign up failed</div>}
      </div>
    </div>
  );
}

export default Signup;
