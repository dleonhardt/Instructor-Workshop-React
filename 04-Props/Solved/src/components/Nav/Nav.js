import React from "react";
import "./nav.css";

function Nav(props) {
	const handleScroll = y => {
		window.scroll({ top: y, left: 0, behavior: "smooth" });
	}

	return (
		<nav className="container">
			<h1><button onClick={() => handleScroll(0)}>John Doe</button></h1>
			<ul>
				<li><button onClick={() => props.handleLink(props.resume)}>Resume</button></li>
				<li><button onClick={() => props.handleLink(props.github)}>GitHub</button></li>
				<li><button onClick={() => props.handleLink(props.linkedin)}>LinkedIn</button></li>
				<li><button onClick={() => handleScroll(document.body.scrollHeight)}>Contact</button></li>
			</ul>
		</nav>
	);
}

export default Nav;