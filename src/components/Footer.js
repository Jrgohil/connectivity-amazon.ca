import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="top text-center">
        <Link to="/">Back to top</Link>
      </div>

      <div className="middle">
        <div className="center">
          <ul>
            <li>
              <h3>Get to Know Us</h3>
            </li>
            <li>
              <Link to="/">Careers</Link>
            </li>
            <li>
              <Link to="/">About Amazon</Link>
            </li>
            <li>
              <Link to="/">Investor Relations</Link>
            </li>
            <li>
              <Link to="/">Amazon Devices</Link>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Make Money with Us</h3>
            </li>
            <li>
              <Link to="/">Sell on Amazon</Link>
            </li>
            <li>
              <Link to="/">Sell Your Services on Amazon</Link>
            </li>
            <li>
              <Link to="/">Sell on Amazon Business</Link>
            </li>
            <li>
              <Link to="/">Sell Your Apps on Amazon</Link>
            </li>
            <li>
              <Link to="/">Become an Affiliate</Link>
            </li>
            <li>
              <Link to="/">Advertise Your Products</Link>
            </li>
            <li>
              <Link to="/">Self-Publish with Us</Link>
            </li>
            <li>
              <Link to="/">Become an Amazon Vendor</Link>
            </li>
            <li>
              <Link to="/">Sell Your Subscription on Amazon</Link>
            </li>
            <li>
              <Link to="/">› See all</Link>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Amazon Payment Products</h3>
            </li>
            <li>
              <Link to="/">Amazon Rewards Visa Signature Cards</Link>
            </li>
            <li>
              <Link to="/">Amazon.com Store Card</Link>
            </li>
            <li>
              <Link to="/">Amazon.com Corporate Credit Line</Link>
            </li>
            <li>
              <Link to="/">Shop with Points</Link>
            </li>
            <li>
              <Link to="/">Credit Card Marketplace</Link>
            </li>
            <li>
              <Link to="/">Reload Your Balance</Link>
            </li>
            <li>
              <Link to="/">Amazon Currency Converter</Link>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Let Us Help You</h3>
            </li>
            <li>
              <Link to="/">Your Account</Link>
            </li>
            <li>
              <Link to="/">Your Orders</Link>
            </li>
            <li>
              <Link to="/">Shipping Rates &amp; Policies</Link>
            </li>
            <li>
              <Link to="/">Amazon Prime</Link>
            </li>
            <li>
              <Link to="/">Returns &amp; Replacements</Link>
            </li>
            <li>
              <Link to="/">Manage Your Content and Devices</Link>
            </li>
            <li>
              <Link to="/">Amazon Assistant</Link>
            </li>
            <li>
              <Link to="/">Help</Link>
            </li>
          </ul>
        </div>

        <ul className="copy text-center">
          <li>
            <Link to="/" className="logo"></Link>
          </li>
          <li>
            <Link to="/" className="select">
              <i className="fa fa-globe" aria-hidden="true"></i>
              English
            </Link>
          </li>
          <li>
            <Link to="/" className="select">
              <i className="flag-icon-canada"></i>Canada
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
