import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from "../features/register/registerSlice";
import './Login.css'

const Login = () => {
  const [formData, setFormData] = useState({
    Accno: '',
  });

  const userArray = useSelector(selectUser);

  const accountNumbers = userArray.map((user) => user.Accno); 

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the entered account number exists in the accountNumbers array
    if (accountNumbers.includes(formData.Accno)) {
      // You can redirect the user to the dashboard or perform any other actions here.
      alert('Login successful!');
    } else {
      alert('Invalid account number. Please try again.');
    }

    // Clear the input field after the login attempt
    setFormData({
      Accno: '',
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
   <div className="d-flex align-items-center justify-content-center">
      <div className="login">
        <h2 className="text-center">BaaS</h2>
        <form onSubmit={handleLogin}>
          <div className='mb-3'>
            <label htmlFor='Accno' className='form-label'>Account Number
              <span className='required-mark'>*</span></label>
            <input
              type='text'
              className='form-control'
              required
              placeholder='Enter your Account Number'
              name='Accno'
              onChange={handleChange}
              value={formData.Accno}
            />
          </div>
          <button type='submit' className='btn btn-primary'>Login</button>
        </form>
      </div>
     </div>
  );
};

export default Login;
