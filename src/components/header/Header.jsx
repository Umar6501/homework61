import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="#" className="logo">
            <img src="assets/logo.png" alt="" />
            <p>Product</p>
          </a>
          <div className="menu">
            <a href="#">
              <img src="assets/bx-menu.svg" alt="" />
            </a>
          </div>
          <nav>
            <a href="#" className="navs">
              Product
            </a>
            <a href="#" className="navs">
              Customers
            </a>
            <a href="#" className="navs">
              Pricing
            </a>
            <a href="#" className="navs">
              Resources
            </a>
            <a href="#" className="button1">
              Sign In
            </a>
            <a href="#" className="button2">
              Sign Up
            </a>
            <img className="img2" src="assets/dark-mode.svg" alt="" />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
