import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <header>
	  <Link to="/">
	    <img className="logo-image" src="img/logo.png" />
	  </Link>
      <input type="text" name="search" />
      <button type="submit" id="search_button">
		search
      </button>
    </header>
  );
}

export default Header;
