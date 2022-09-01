import React from "react";
import {Link} from "react-router-dom";
import {purple} from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import "./style.css";

function Header() {
  return (
    <header className="header">
	  <Link to="/">
	    <img className="logo-image" src="img/logo.png" />
	  </Link>
	  <div className="search">
        <input className="search-input" type="text" name="search" />
        <SearchIcon sx={{color: purple[900], fontSize: 40}} />
	  </div>
      
    </header>
  );
}

export default Header;
