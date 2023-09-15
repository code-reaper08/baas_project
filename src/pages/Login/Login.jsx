import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  syncWithLocalStorage,
} from "../../features/register/registerSlice";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    Accno: "",
  });

  const userArray = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const accountNumbers = userArray.map((user) => user.Accno);

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the entered account number exists in the accountNumbers array
    if (accountNumbers.includes(formData.Accno)) {
      // You can redirect the user to the dashboard or perform any other actions here.
      alert("Login successful!");
      sessionStorage.setItem("isloggedin", "true");
      sessionStorage.setItem("accNo", formData.Accno);
      navigate("/dashboard");
    } else {
      alert("Invalid account number. Please try again.");
    }

    // Clear the input field after the login attempt
    setFormData({
      Accno: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log(userArray);
    if (localStorage.getItem("users")) {
      dispatch(syncWithLocalStorage(JSON.parse(localStorage.getItem("users"))));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="login">
        <h2 className="text-center">BaaS</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="Accno" className="form-label">
              Account Number
              <span className="required-mark">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              required
              placeholder="Enter your Account Number"
              name="Accno"
              onChange={handleChange}
              value={formData.Accno}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
