import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, syncWithLocalStorage } from "../../features/register/registerSlice";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import './Dashboard.css';

export default function Dashboard() {
  const userArray = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("users")) {
      dispatch(syncWithLocalStorage(JSON.parse(localStorage.getItem("users"))));
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("isloggedin");
    sessionStorage.removeItem("accNo");
    navigate("/");
  };

  const loggedInAccNo = sessionStorage.getItem("accNo");
  const loggedInUser = userArray.find((user) => user.Accno === loggedInAccNo);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            Bank Account Application
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link to="/insuranceServices" className="nav-link">
                  Insurance
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/loanServices" className="nav-link">
                  Loan
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/exchangeServices" className="nav-link">
                  Exchange
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/investementServices" className="nav-link">
                  Investements
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/bankingServices" className="nav-link">
                  Banking
                </Link>
              </li>
            </ul>
          </div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
      <div className="d-flex align-items-center justify-content-center">
        <div className="register">
          <h1>Welcome, {loggedInUser?.firstname}</h1>
          <p>Email: {loggedInUser?.email}</p>
          <p>Contact Number: {loggedInUser?.contactnumber}</p>
          <p>Account Number: {loggedInUser?.Accno}</p>
        </div>
      </div>
    </div>
  );
};