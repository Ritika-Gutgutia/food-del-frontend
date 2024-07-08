/* eslint-disable no-unused-vars */

import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

// eslint-disable-next-line react/prop-types
const Navbar = ({ showLogin, setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  const handleClick = (menuOption) => {
    setMenu(menuOption);
  };

  const signInButtonClick = () => {
    setShowLogin((prev) => {
      return !prev;
    });
  };
  return (
    <div className="navbar">
      <Link to="/">
        {" "}
        <img src={assets.logo} className="navbar__logo" alt="logo" />{" "}
      </Link>
      <ul className="navbar__menu">
        <Link
          to="/"
          onClick={() => handleClick("home")}
          className={`navbar__menu__list ${
            menu === "home" ? "navbar__menu__active" : ""
          }`}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => handleClick("menu")}
          className={`navbar__menu__list ${
            menu === "menu" ? "navbar__menu__active" : ""
          }`}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => handleClick("mobile-app")}
          className={`navbar__menu__list ${
            menu === "mobile-app" ? "navbar__menu__active" : ""
          }`}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => handleClick("contact-us")}
          className={`navbar__menu__list ${
            menu === "contact-us" ? "navbar__menu__active" : ""
          }`}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar__right">
        {" "}
        <img src={assets.search_icon} alt="searchIcon" />
        <div className="navbar__right__basket__icon">
          <Link to="/cart">
            <img
              src={assets.basket_icon}
              className="navbar__right__img"
              alt=""
            />{" "}
          </Link>
          <div
            className={
              getTotalCartAmount() > 0 ? "navbar__right__basket__icon__dot" : ""
            }
          ></div>
        </div>
        <div>
          <button
            className="navbar__right__button"
            onClick={() => signInButtonClick()}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
