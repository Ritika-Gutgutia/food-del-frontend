import { assets } from "../../assets/assets";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer__content">
        <div className="footer__content__left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum </p>
          <div className="footer__content__left__social_icons">
            <img src={assets.facebook_icon} />
            <img src={assets.twitter_icon} />
            <img src={assets.linkedin_icon} />
          </div>
        </div>
        <div className="footer__content__center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer__content__right">
          <h2>Get in touch</h2>
          <ul>
            <li>+1-444-555-6541</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr className="footer__hr" />
      <p className="footer__copyright">
        Copyright 2024 © Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
