import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BankingService from "./pages/BankingServices/BankingService";
import InsuranceService from "./pages/BankingServices/InsuranceService";
import ExchangeService from "./pages/BankingServices/ExchangeService";
import InvestementService from "./pages/BankingServices/InvestementService";
import LoanService from "./pages/BankingServices/LoanService";

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
          <Route exact path="/loanServices" element={<LoanService/>}/>
          <Route exact path="/insuranceServices" element={<InsuranceService/>}/>
          <Route exact path="/exchangeServices" element={<ExchangeService/>}/>
          <Route exact path="/bankingServices" element={<BankingService/>}/>
          <Route exact path="/investementServices" element={<InvestementService/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;