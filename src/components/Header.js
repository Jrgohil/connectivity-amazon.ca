import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import productContext from "../context/ProductContext";
const Header = () => {
  const { categories } = useContext(productContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg nav-first">
        <button
          className="navbar-toggler navbar-left"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon ">
            <i className="fas fa-bars"></i>
          </span>
        </button>
        <Link className="navbar-brand" to="/">
          <img src="/img/amazon_PNG25.png" width="100" height="30" alt="" />
        </Link>
        <div className="mobile-cart ">
          <Link className="nav-link  " to="/">
            <span className="mobile-cart-item">0</span>
            <span className="second-text mobile-cart-text">Cart</span>
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="navbarColor02">
          <div className="input-group">
            <div className="input-group-btn search-panel">
              <button
                type="button"
                className="btn btn-default dropdown-toggle"
                data-toggle="dropdown"
              >
                <span id="search_concept">All</span>
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" role="menu">
                {categories.map((cat) => (
                  <li>
                    <Link
                      href="#contains"
                      style={{ color: "black", padding: "10px" }}
                    >
                      {cat.cat_title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <input
              type="text"
              className="form-control"
              name="x"
              id="searchbar"
              placeholder="Search term..."
            />
            <span className="input-group-btn">
              <button className="btn search-btn" type="button">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </span>
          </div>

          <ul className="navbar-nav mr-auto pc-nav">
            <li className="nav-item py-0 dropdown">
              <Link
                className="nav-link py-0 dropdown-toggle nav-text"
                to="/Login"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="first-text">Hello, Sign in </span>
                <br />
                <span className="second-text">Account &amp; Lists</span>
              </Link>
            </li>
            <li className="nav-item py-0">
              <Link className="nav-link py-0 nav-text" to="/">
                <span className="first-text">Returns</span>
                <br />
                &amp; <span className="second-text">Orders</span>
              </Link>
            </li>
            <li className="nav-item .d-none .d-lg-block">
              <Link className="nav-link  cart" to="/">
                <span className="cart-item-count">0</span>
                <span className="second-text cart-text">Cart</span>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mobile-nav">
            <li className="mobile-nav-items">
              <Link className="nav-text py-0 second-text">Sign In</Link>
            </li>
            <li className="mobile-nav-items">
              <Link className="nav-text py-0 second-text">Return & Orders</Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="navbar navbar-expand">
        <div className="navbar-nav">
          {categories.map((cat) => (
            <Link
              className="nav-item nav-link py-0"
              to={"/ProductListing/" + cat}
            >
              {cat}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;
