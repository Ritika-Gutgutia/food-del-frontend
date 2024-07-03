/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const handleClick = (menuOption) => {
    setMenu(menuOption);
  };

  return (
    <div className="navbar">
      <img src={assets.logo} className="navbar__logo" alt="logo" />
      <ul className="navbar__menu">
        <li
          onClick={() => handleClick("home")}
          className={`navbar__menu__list ${
            menu === "home" ? "navbar__menu__active" : ""
          }`}
        >
          Home
        </li>
        <li
          onClick={() => handleClick("menu")}
          className={`navbar__menu__list ${
            menu === "menu" ? "navbar__menu__active" : ""
          }`}
        >
          Menu
        </li>
        <li
          onClick={() => handleClick("mobile-app")}
          className={`navbar__menu__list ${
            menu === "mobile-app" ? "navbar__menu__active" : ""
          }`}
        >
          Mobile-app
        </li>
        <li
          onClick={() => handleClick("contact-us")}
          className={`navbar__menu__list ${
            menu === "contact-us" ? "navbar__menu__active" : ""
          }`}
        >
          Contact Us
        </li>
      </ul>
      <div className="navbar__right">
        <img src={assets.search_icon} alt="searchIcon" />
        <div className="navbar__right__basket__icon">
          <img src={assets.basket_icon} alt="" />
          <div className="navbar__right__basket__icon__dot"></div>
        </div>
        <div>
          <button className="navbar__right__button">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
