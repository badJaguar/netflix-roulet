import * as React from "react";

import { icon } from "../assets/icons";
import BackgroundPoster from "../assets/poster.jpeg";
import { ErrorBoundry } from "../services/ErrorBoundry";
import { Sort } from "./sort/Sort";

import "../styles/Header.scss";

export class Header extends React.Component {
	public render() {
		return (
			<ErrorBoundry>
				<div className="header">
					<div className="logo">
						<icon.logo />
					</div>
					<img src={BackgroundPoster} alt="poster" />
					<Sort />
				</div>
			</ErrorBoundry>
		);
	}
}
