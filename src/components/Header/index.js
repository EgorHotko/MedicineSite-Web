import React from "react";
import "./styles.css";
import logo from "./images/Hospital-Symbol.png";

const Header = () => (
  <nav class="navbar">
    <div class="navbar-left-content">
      <img src={logo} width="40" height="40" class="navbar-image" />
      <a> Medicine site </a>
      <a href="/">Home</a>
      <a href="/add">Add</a>
    </div>
    <div class="navbar-right-content">
      <form>
        <input id="search" type="search" placeholder="Search by Name..." />
        <button id="searchSubmit" type="submit" class="btn success">
          {" "}
          Search{" "}
        </button>
      </form>
    </div>
  </nav>
);

export default Header;
