import React, { useState } from 'react';
import './ECommerceRegister.css';
import { useNavigate } from 'react-router-dom';
import ecomapi from '../../Reducers/AxiosConfig';

const ECommerceRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const response = await ecomapi.post('/register', {
        email,
        password,
        fullName,
      });

      alert('Registration successful! Please login.');
      navigate('/');
    } catch (error) {
      console.error('Registration error:', error);
      setErrorMsg('Registration failed. Please try again.');
    }
  };

  return (
    <div className="ecom-register-page">
      <form className="ecom-register-form" onSubmit={handleSubmit}>
        <h2 className="ecom-register-title">Create Your Account</h2>
        {errorMsg && <p className="ecom-register-error">{errorMsg}</p>}
        <input
          className="ecom-register-input"
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          className="ecom-register-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="ecom-register-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="ecom-register-button" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default ECommerceRegister;
