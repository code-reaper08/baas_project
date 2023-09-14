import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Home/> */}
      <Router>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
