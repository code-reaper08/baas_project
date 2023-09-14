import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { registerUser,selectUser  } from "../features/register/registerSlice";
import "./Register.css";
import { Link } from 'react-router-dom';

const Register= () => {
  const [formData, setFormData] = useState({
    firstname: '',
    email: '',
    password: '',
    Accno: '',
    contactnumber: '',
  });

  const dispatch = useDispatch();
  const userArray = useSelector(selectUser);


  useEffect(() => {
      console.log(userArray);
     }, 
     [userArray]);

  const handleSubmit = (e) => {

    e.preventDefault();
    dispatch(registerUser(formData));
    alert('Registered Successfully');
    // formData.current.reset();
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
    <div className="register">
        <h2 className="text-center"> Self Register Form</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='Firstname' className='form-label'>First Name
              <span className='required-mark'>*</span></label>
            <input type={"text"}
              className='form-control'
              required
              placeholder='Enter your First Name'
              name="firstname"
              onChange={handleChange}
              value={formData.name}
              />
          </div>

          <div className='mb-3'>
            <label htmlFor='Contactnumber' className='form-label'>Contact Number
              <span className='required-mark'>*</span></label>
            <input type={"tell"}
              className='form-control'
              pattern="[0-9]{10}"
              maxLength="10"
              minLength="10"
              required={true}
              inputMode="numeric"
              placeholder='Enter your Contact Number'
              name="contactnumber"
              onChange={handleChange}
              value={formData.contactnumber}
              />

          </div>

          <div className='mb-3'>
            <label htmlFor='Password' className='form-label'>Account Number
              <span className='required-mark'>*</span></label>
            <input type={"text"}
              className='form-control'
              required
              placeholder='Enter your Acc Number'
              name="Accno"
              onChange={handleChange}
              value={formData.Accno}
              />
          </div>

          <div className='mb-3'>
            <label htmlFor='Email' className='form-label'>Email
              <span className='required-mark'>*</span></label>
            <input type={"mail"}
              required={true}
              title="Please enter a valid email"
              inputMode="email"
              maxLength="50"
              minLength="5"
              className='form-control'
              placeholder='Enter your Email'
              name="email"
              onChange={handleChange}
              value={formData.email}
              />

          </div>
          <div className='mb-3'>
            <label htmlFor='Password' className='form-label'>Password
              <span className='required-mark'>*</span></label>
            <input type={"text"}
              className='form-control'
              required
              placeholder='Enter your Password'
              name="password"
              onChange={handleChange}
              value={formData.password}
              />

          </div>
      {/* {userArray.map((eachuser) => {
          return <h1>{eachuser?.name}</h1>;
        })} */}
      <button type="submit" className='btn btn-primary'>Register</button>
      <Link to="/" className="btn btn-success m-2">Home</Link>
    </form>
    </div>
    </div>
  );
};

export default Register;
