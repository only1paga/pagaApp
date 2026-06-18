import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartUp from "./pages/StartUp";
import Home from "./pages/Home";
import Pin from "./pages/Pin";
import Otp from "./pages/Otp";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<StartUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pin" element={<Pin />} />
          <Route path="/otp" element={<Otp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
