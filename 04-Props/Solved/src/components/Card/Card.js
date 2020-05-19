import React from "react";
import "./card.css";

function Card(props) {
	return (
		<section className="card">
			<a href={props.deployed} target="_blank">
				<h5>{props.title}</h5>
				<img src="https://via.placeholder.com/300" />
			</a>
			<p>{props.desc}</p>
			<ul>
				<li><button onClick={() => props.handleLink(props.deployed)} className="btn-primary">Deployed</button></li>
				<li><button onClick={() => props.handleLink(props.github)} className="btn-primary">GitHub</button></li>
			</ul>
		</section>
	);
}

export default Card;