import * as React from "react";

import { icon } from "../../assets/icons";
import { constant } from "../../core/I18n";
import { ErrorBoundry } from "../../services/ErrorBoundry";
import { Toggler } from "../toggler/Toggler";
import { ISearchState } from "./ISearchState";

export interface ISearchProps {

}

export class SearchBy extends React.Component<ISearchProps, ISearchState> {
	public state = { searchToggle: false };

	public render() {
		const { searchToggle } = this.state;

		return (
			<ErrorBoundry>
				<div>
					<div className="search">
						<div className="searchHeader">
							<h1>{constant.Search.Title}</h1>
						</div>
						<div className="searchInput">
							<input
								type="text"
								placeholder="Search"
							/>
							<icon.search /></div>
						<Toggler
							name={"name"}
							idLeft="searchToggleLeft"
							idRight="searchToggleRight"
							onChange={this.onSearchToggle}
							toggle={searchToggle}
							title={constant.Search.Toggler.Title}
							leftLabel={constant.Search.Toggler.LeftLabel}
							rightLabel={constant.Search.Toggler.RightLabel}
						/>
					</div>
				</div>
			</ErrorBoundry>
		);
	}

	private readonly onSearchToggle = () => {
		this.setState({ searchToggle: !this.state.searchToggle });
	}
}
