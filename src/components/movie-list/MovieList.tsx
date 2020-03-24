import * as React from "react";

import { Link } from "react-router-dom";
import { IMovieDTO } from "../../DAL/IMovie";
import { routes } from "../../services/Routes";
import { IMovieListState } from "./IMovieListState";

const convertDate = (date: string) => {
	const converted = new Date(date);
	return converted.getFullYear();
};

const MovieList = ({ movies }: IMovieListState) => {
	return (
		<div className="movieList-Item">
			{movies.map((movieItem) => {
				return (
					<div className="movieItem" key={movieItem.id}>
						<Movie {...movieItem}
						/>
					</div>
				);
			})}
		</div>
	);
};

const Movie = ({ ...movie }: IMovieDTO) => {
	return (
		<div key={movie.id}>
			<Link to={`${routes.TO_MOVIE.path}${movie.id}`} key={movie.id}
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			>
				<img className="imgMovie" src={movie.poster_path} alt={movie.title} />
			</Link>

			<div className="movieDescription">
				<span className="title">{movie.title}</span>
				<span className="year">
					{convertDate(movie.release_date)}
				</span>
			</div>
			<p className="movieGenre">{movie.genres.join(" & ")}</p>
		</div>
	);
};
export { MovieList };
