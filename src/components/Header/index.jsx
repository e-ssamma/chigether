import React from "react";
import {Link} from "react-router-dom";
import {Link} from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <header className="header">
	  <Link to="/">
	    <img className="logo-image" src="img/logo.png" />
	  </Link>
	  <div>
        <input className="input-search" type="text" name="search" />
        <button type="submit" id="search_button">
			search
        </button>
	  </div>
      
    </header>
  );
}

export default Header;
