import React from "react";
import Nav from "../Nav";
import "./header.css";

function Header(props) {
	return (
		<header className="fixed">
			<Nav {...props} />
		</header>
	);
}

export default Header;