import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/startup.css";

const StartUp = () => {
  const [textInput, setTextInput] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedInput = localStorage.getItem("startupInput");
    if (savedInput) {
      setTextInput(savedInput);
    }
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setTextInput(value);
    localStorage.setItem("startupInput", value);
  };

  const handleSubmit = () => {
    setLoading(true);
    localStorage.setItem("startupInput", textInput);
    setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 1000);
  };

  const isButtonEnabled = textInput.trim().length > 0;

  return (
    <div className="startup-wrapper">
      <div className="startup-card">
        {/* Logo */}
        <div className="startup-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Welcome Message */}
        <div className="startup-heading">
          <h1>Welcome to Grey Global</h1>
          <p>Kindly write your complaint or request in the box below</p>
        </div>

        {/* Text Input Box */}
        <div className="startup-textarea-wrap">
          <textarea
            value={textInput}
            onChange={handleInputChange}
            placeholder="Write your complaint or request here..."
            rows={4}
          />
        </div>

        {/* Instructions */}
        <div className="startup-instructions">
          <p>
            Please log in to your account to submit your complaint or request.{" "}
            <span>Log in to continue</span>
          </p>
        </div>

        {/* Login Button */}
        <button
          onClick={handleSubmit}
          disabled={!isButtonEnabled || loading}
          className={`startup-btn${!isButtonEnabled ? " disabled" : ""}`}
        >
          {loading ? "Processing..." : "Login to continue"}
        </button>
      </div>
    </div>
  );
};

export default StartUp;
