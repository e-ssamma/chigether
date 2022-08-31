import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <header className="header">
	  <Link to="/">
	    <img className="logo-image" src="img/logo.png" />
	  </Link>
	  <div>
        <input className="search-input" type="text" name="search" />
        <button className="search-button" type="submit" id="search_button">
        </button>
	  </div>
      
    </header>
  );
}

export default Header;
