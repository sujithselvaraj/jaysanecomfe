import React, { useState } from 'react';
import './ECommerceLogin.css';
import { useNavigate } from 'react-router-dom';
import ecomapi from '../../Reducers/AxiosConfig';

const ECommerceLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const response = await ecomapi.post('/login', { email, password });
      console.log(response.data);
      const jwtToken  = response.data.token;

      localStorage.setItem('token', jwtToken);
      alert('Login successful!');
      navigate("/com-home")
    } catch (error) {
      console.error("Login error:", error);
      setErrorMsg('Invalid credentials');
    }
  };

  return (
    <div className="ecom-login-page">
    <form className="ecom-login-form" onSubmit={handleSubmit}>
      <h2 className="ecom-login-title">Welcome Back</h2>
      {errorMsg && <p className="ecom-login-error">{errorMsg}</p>}
      <input
        className="ecom-login-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="ecom-login-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="ecom-login-button" type="submit">Login</button>
      <p>Not an user. Click here to Signup!</p>
    </form>
  </div>
  );
};

export default ECommerceLogin;
