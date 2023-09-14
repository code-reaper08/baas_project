import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser,selectUser,syncWithLocalStorage,} from "../../features/register/registerSlice";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    password: "",
    Accno: "", // Remove the Accno field from here
    contactnumber: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userArray = useSelector(selectUser);

  useEffect(() => {
    console.log(userArray);
    if (localStorage.getItem("users")) {
      dispatch(syncWithLocalStorage(JSON.parse(localStorage.getItem("users"))));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateAccno = () => {
  
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate a random account number
    const randomAccno = generateAccno();

    // Include the generated account number in the form data
    const updatedFormData = {
      ...formData,
      Accno: randomAccno,
    };

    dispatch(registerUser(updatedFormData));
    
    // Assuming registerUser dispatching indicates success
    alert("Registered Successfully with Account Number: " + randomAccno);
    navigate("/login");
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
        <div className="mb-3">
            <label htmlFor="Firstname" className="form-label">
              First Name
              <span className="required-mark">*</span>
            </label>
            <input
              type={"text"}
              className="form-control"
              required
              placeholder="Enter your First Name"
              name="firstname"
              onChange={handleChange}
              value={formData.name}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Contactnumber" className="form-label">
              Contact Number
              <span className="required-mark">*</span>
            </label>
            <input
              type={"tell"}
              className="form-control"
              pattern="[0-9]{10}"
              maxLength="10"
              minLength="10"
              required={true}
              inputMode="numeric"
              placeholder="Enter your Contact Number"
              name="contactnumber"
              onChange={handleChange}
              value={formData.contactnumber}
            />
          </div>

          
         
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
              <span className="required-mark">*</span>
            </label>
            <input
              type={"mail"}
              required={true}
              title="Please enter a valid email"
              inputMode="email"
              maxLength="50"
              minLength="5"
              className="form-control"
              placeholder="Enter your Email"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              Password
              <span className="required-mark">*</span>
            </label>
            <input
              type={"text"}
              className="form-control"
              required
              placeholder="Enter your Password"
              name="password"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <Link to="/" className="btn btn-success m-2">
            Home
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
