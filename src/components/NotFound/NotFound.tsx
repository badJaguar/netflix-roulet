import React from "react";

import { Link } from "react-router-dom";
import { routes } from "../../services/Routes";

import "./NotFound.scss";

export const NotFound = () => {
	return (
		<div className="overlay">
			<div className="not-found">
				<h1>404 - Not found</h1>
				<Link to={routes.HOME.path} className={"to-home-link"}>To Main Menu</Link>
			</div>
		</div>
	);
};
