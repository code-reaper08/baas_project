// components/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const HomePage = () => {
  return (
      <div className="home">
        <h2 className="text-center">Welcome to Our Website</h2>
        <div className="text-center">
          <Link to="/register" className="btn btn-primary m-2">Self Register</Link>
          <Link to="/login" className="btn btn-success m-2">BaaS</Link>
        </div>
      </div>
  );
};

export default HomePage;