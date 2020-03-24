import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { IMovieDTO } from "../../DAL/IMovie";
import { icon } from "../../assets/icons";
import { constant } from "../../core/I18n";
import { ErrorBoundry } from "../../services/ErrorBoundry";
import { routes } from "../../services/Routes";
import { IMovieItemProps } from "./IMovieItemProps";

import "../../styles/MovieItem.scss";

let movieItem: IMovieDTO = {} as IMovieDTO;

class MovieItemToConnect extends React.Component<IMovieItemProps> {

	public render() {
		return (
			<ErrorBoundry>
				<div className="movieListItem">
					<div className="searchIcon">
						<Link to={routes.HOME.path}><icon.search /></Link>
					</div>
					<img className="imgMovieItem" src={this.value.poster_path} alt="" />
					<div className="movieListItem-content">
						<div className="movieListItem-title">
							{this.value.title}
							<div className="movieListItem-rating">
								<p className="movieListItem-rating-text">{this.value.vote_average}</p>
							</div>
						</div>
						<div className="movieListItem-tagline">
							{this.value.tagline}
						</div>
						<div className="movieListItem-dateOfRelease">
							{this.releaseDateAndRuntime(this.value)}
						</div>
						<div className="movieListItem-description">
							{this.value.overview}
						</div>
					</div>
				</div>
			</ErrorBoundry>
		);
	}

	public get value() {
		const movieId = Number.parseInt(this.props.match.params.id, 10);
		const isExist = this.props.movies.some((x) => x.id === movieId);
		if (isExist) {
			const result = this.props.movies.filter((x) => x.id === movieId)[0];
			movieItem = result;
			return movieItem;

		}
		return {} as IMovieDTO;
	}

	private readonly convertDate = (date: string) => {
		const converted = new Date(date);
		return converted.getFullYear();
	}

	private readonly releaseDateAndRuntime = (movie: IMovieDTO) => {
		return `${this.convertDate(movie.release_date)}   ${movie.runtime} ${constant.Movie.Runtime}`;
	}
}

const mapStateToProps = (state: any) => {
	return {
		movies: state.movies.movies as IMovieDTO[],
	};
};

export const MovieItem = connect(mapStateToProps)(MovieItemToConnect);
