import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate= useNavigate()

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:3001' , {email,password})
    .then(result => {
    console.log(result)
    if(result.data === "Success"){
    navigate('/home')
    }
    else if (result.data === 'Password is incorrect' || result.data === 'No record exists') {
      setError('Incorrect password or email not found.');
    } else {
      setError('Something went wrong. Please try again later.');
    }
    })
  
  }

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">Login</button>
          {error && <p className="text-danger mt-2">{error}</p>}
        </div>
      </form>
    </div>
  )
}

export default Login;
