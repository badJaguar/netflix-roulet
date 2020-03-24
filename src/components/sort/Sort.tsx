import * as React from "react";

import { connect } from "react-redux";
import { sortAndOrderData } from "../../actions/movies";
import { constant } from "../../core/I18n";
import { ErrorBoundry } from "../../services/ErrorBoundry";
import { Toggler } from "../toggler/Toggler";
import { ISortState } from "./ISortState";
import { IMovieDTO } from '../../DAL/IMovie';

export interface ISortProps {
	changeSortHanler: any;
}

export class SortToProps extends React.Component<ISortProps, ISortState> {

	public state = { sortToggle: false };
	public componentDidUpdate() {
		this.props.changeSortHanler();
	}
	public render() {
		const { sortToggle } = this.state;
		return (
			<ErrorBoundry>
				<div className="sortToggle">
					<Toggler
						name="sortName"
						idLeft="sortToggleLeft"
						idRight="sortToggleRight"
						onChange={this.onSortToggle}
						toggle={sortToggle}
						title={constant.Sort.Toggler.Title}
						leftLabel={constant.Sort.Toggler.LeftLabel}
						rightLabel={constant.Sort.Toggler.RightLabel}
					/>
				</div>
			</ErrorBoundry>
		);
	}

	private readonly onSortToggle = () => {
		this.props.changeSortHanler();
		this.setState({ sortToggle: !this.state.sortToggle });
	}
}

const mapStateToProps = (state: any) => ({
	currentSortValue: state.sortData.sortValue.ReleaseDate,

	movies: state.movies.movies as IMovieDTO[],

	newSortValue: state.sortData.sortValue.Votes,
});

const mapDispatchToProps = (dispatch: any) => ({
	changeSortHanler: () => dispatch(sortAndOrderData()),
});

export const Sort = connect(mapStateToProps, mapDispatchToProps)(SortToProps);
