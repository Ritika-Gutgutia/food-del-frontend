/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { useEffect } from "react";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const LoginPopup = ({ showLogin, setShowLogin }) => {
  const { url, token, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onLogin = async (event) => {
    console.log("On login in process");
    event.preventDefault();
    let newUrl = url;

    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
    // const formData = new FormData();
    // formData.append("name", data.name);
    // formData.append("email", data.email);
    // formData.append("password", data.password);
  };

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
      <form onSubmit={onLogin} className="loginPopup__container">
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
          {/* {currState === "Login"} */}
          <input
            onChange={onChangeHandler}
            className="loginPopup__inputs__input"
            name="name"
            value={data.name}
            type="text"
            placeholder="Your name"
            required
          />
          <input
            onChange={onChangeHandler}
            className="loginPopup__inputs__input"
            name="email"
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />

          <input
            onChange={onChangeHandler}
            className="loginPopup__inputs__input"
            name="password"
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="loginPopup__container__button">
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
