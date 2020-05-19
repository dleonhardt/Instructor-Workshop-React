import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Container, Row } from "reactstrap";

function App() {
	return (
		<>
			<Navbar color="dark" dark expand="md">
				<NavbarBrand href="/">John Doe</NavbarBrand>
				<Nav navbar className="ml-auto">
					<NavItem>
						<NavLink href="#">Resume</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">GitHub</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">LinkedIn</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">Contact</NavLink>
					</NavItem>
				</Nav>
			</Navbar>
			<Container>
				<Row>
					<h3>Portfolio</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend imperdiet ipsum et iaculis. Vestibulum tincidunt ex et orci ornare, vel vehicula magna laoreet. Proin gravida maximus pellentesque. Maecenas vitae fermentum eros. Fusce congue ipsum nec ultrices mollis. Nullam vel finibus risus, sed tincidunt nisi. In volutpat malesuada tortor, nec mollis ipsum porttitor et. Morbi eu dictum purus. Sed nunc odio, viverra vel nulla ut, semper euismod tellus. Nullam hendrerit maximus mi vel venenatis. Suspendisse potenti. In consectetur, quam at faucibus maximus, nisi diam feugiat dolor, rutrum vehicula est dolor quis tellus. Nam nec ipsum malesuada, accumsan mauris in, ultrices purus.</p>
					<p>Nulla sodales felis ut eros pellentesque, eget faucibus odio laoreet. Praesent sed turpis eu est tempor sagittis. Donec ac risus eget purus mattis gravida vitae sed mi. Aenean euismod erat non imperdiet rhoncus. Sed placerat, nisi id rutrum aliquet, dui massa sodales orci, pellentesque finibus purus tortor quis lacus. Sed ut convallis nisl. Fusce eu leo justo.</p>
				</Row>
				<Row>
					<h3>About Me</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend imperdiet ipsum et iaculis. Vestibulum tincidunt ex et orci ornare, vel vehicula magna laoreet. Proin gravida maximus pellentesque. Maecenas vitae fermentum eros. Fusce congue ipsum nec ultrices mollis. Nullam vel finibus risus, sed tincidunt nisi. In volutpat malesuada tortor, nec mollis ipsum porttitor et. Morbi eu dictum purus. Sed nunc odio, viverra vel nulla ut, semper euismod tellus. Nullam hendrerit maximus mi vel venenatis. Suspendisse potenti. In consectetur, quam at faucibus maximus, nisi diam feugiat dolor, rutrum vehicula est dolor quis tellus. Nam nec ipsum malesuada, accumsan mauris in, ultrices purus.</p>
					<p>Nulla sodales felis ut eros pellentesque, eget faucibus odio laoreet. Praesent sed turpis eu est tempor sagittis. Donec ac risus eget purus mattis gravida vitae sed mi. Aenean euismod erat non imperdiet rhoncus. Sed placerat, nisi id rutrum aliquet, dui massa sodales orci, pellentesque finibus purus tortor quis lacus. Sed ut convallis nisl. Fusce eu leo justo.</p>
				</Row>
				<Row>
					<h3>Contact</h3>
				</Row>
				<Row>
					<ul>
						<li>Email: <a href="mailto:john@john.com">john@john.com</a></li>
						<li>Phone: <a href="tel:(123) 456-7890">(123) 456-7890</a></li>
					</ul>
				</Row>
			</Container>
		</>
	);
}

export default App;