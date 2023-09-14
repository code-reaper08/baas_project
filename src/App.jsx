import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Home/> */}
      <Router>
      <Routes>
      <Route exact path={"/"} element={<Home/>}/>
      <Route exact path="/Register" element={<Register/>}/>
      <Route exact path="/login" element={<Login/>}/>
       
        
        </Routes>
       
    </Router>
    </div>
  );
}

export default App;