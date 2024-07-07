import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

// eslint-disable-next-line react/prop-types
const LoginPopup = ({ showLogin, setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const handleCrossIconClick = () => {
    setShowLogin(false);
  };

  const handleCreateAccClick = () => {
    setCurrState("Sign Up");
  };

  const handleAlreadyHaveAccClick = () => {
    setCurrState("Login");
  };
  return (
    <div className="loginPopup">
      <form className="loginPopup__container">
        <div className="loginPopup__container__title">
          <h2>{currState}</h2>
          <img
            className="loginPopup__container__title__crossIcon"
            onClick={() => handleCrossIconClick()}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="loginPopup__inputs">
          <input
            className="loginPopup__inputs__input"
            type="text"
            placeholder="Your name"
            required
          />
          <input
            className="loginPopup__inputs__input"
            type="email"
            placeholder="Your email"
            required
          />
          <input
            className="loginPopup__inputs__input"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button className="loginPopup__container__button">
          {" "}
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="loginPopup__condition">
          <input
            className="loginPopup__condition__input"
            type="checkbox"
            required
          />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account ?{" "}
            <span
              className="loginPopup__container__span"
              onClick={() => handleCreateAccClick()}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            {" "}
            Already have an account ?{" "}
            <span
              className="loginPopup__container__span"
              onClick={() => handleAlreadyHaveAccClick()}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
