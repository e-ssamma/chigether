import React from "react";
import "./style.css";

function Header() {
	return (
		<div>
			<a href="/">
				<img className="logoImage" src="img/logo.png" />
			</a>
			<input type="text" name="search" />
			<button type="submit" id="search_button">
				search
			</button>
		</div>
	);
}

export default Header;
