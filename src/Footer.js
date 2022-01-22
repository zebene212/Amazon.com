import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="back_to_top">
        <a href="#top">Back to top</a>
      </div>
      <div className="footer_wraper">
        <div className="footer_link">
          <div className="links_1">
            <ul>
              <h3>Get to Know Us</h3>
              <li>
                <a href="/#">Careers</a>
              </li>
              <li>
                <a href="/#">Blog</a>
              </li>
              <li>
                <a href="/#">About Amazon</a>
              </li>
              <li>
                <a href="/#">Sustainability</a>
              </li>
              <li>
                <a href="/#">Press Center</a>
              </li>
              <li>
                <a href="/#">Investor Relations</a>
              </li>
              <li>
                <a href="/#">Amazon Devices</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <h3>Make Money with Us</h3>
              <li>
                <a href="/#">Sell products on Amazon</a>
              </li>
              <li>
                <a href="/#">Sell apps on Amazon</a>
              </li>
              <li>
                <a href="/#">About Amazon</a>
              </li>
              <li>
                <a href="/#">Become an Affiliate</a>
              </li>
              <li>
                <a href="/#"> Become a Delivery Driver</a>
              </li>
              <li>
                <a href="/#">Start a package delivery business</a>
              </li>
              <li>
                <a href="/#">Advertise Your Products</a>
              </li>
              <li>
                <a href="/#"> Self-Publish with Us</a>
              </li>
              <li>
                <a href="/#">Host an Amazon Hub</a>
              </li>
              <li>
                <a href="/#">See More Ways to Make Money</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <h3>Make Money with Us</h3>
              <li>
                <a href="/#">Amazon Payment Products</a>
              </li>
              <li>
                <a href="/#">Amazon Rewards Visa Signature Cards</a>
              </li>
              <li>
                <a href="/#">Amazon.com Store Card</a>
              </li>
              <li>
                <a href="/#">Amazon Secured Card</a>
              </li>
              <li>
                <a href="/#">Amazon Business Card</a>
              </li>
              <li>
                <a href="/#">Amazon Business Line of Credit</a>
              </li>
              <li>
                <a href="/#">Shop with Points</a>
              </li>
              <li>
                <a href="/#">Credit Card Marketplace</a>
              </li>
              <li>
                <a href="/#">Reload Your Balance</a>
              </li>
              <li>
                <a href="/#">Amazon Currency Converter</a>
              </li>
            </ul>
          </div>
          <div className="links_2">
            <ul>
              <h3>Let Us Help You</h3>
              <li>
                <a href="/#">Amazon and COVID-19</a>
              </li>
              <li>
                <a href="/#">Your Account</a>
              </li>
              <li>
                <a href="/#">Your Orders</a>
              </li>
              <li>
                <a href="/#">Shipping Rates & Policies</a>
              </li>
              <li>
                <a href="/#">Amazon Prime</a>
              </li>
              <li>
                <a href="/#">Returns & Replacements</a>
              </li>
              <li>
                <a href="/#">Manage Your Content and Devices</a>
              </li>
              <li>
                <a href="/#">Amazon Assistant</a>
              </li>
              <li>
                <a href="/#"> Help</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
     
      <div className="logo_wraper">
        <div className="container_1">
          <div className="footer_logo">
            <Link to="/">
              <img
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              />
            </Link>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Footer;
