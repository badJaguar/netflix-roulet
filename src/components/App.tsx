import * as React from "react";

import { connect } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { IMovieDTO } from "../DAL/IMovie";
// import { moviesFetchData } from "../actions/movies";
import { ErrorBoundry } from "../services/ErrorBoundry";
import { routes } from "../services/Routes";
import { Header } from "./Header";
import { NotFound } from "./NotFound/NotFound";
import { Footer } from "./footer/Footer";
import { MovieItem } from "./movie-item/MovieItem";
import { MovieList } from "./movie-list/MovieList";
import { SearchBy } from "./search/Search";
import { fetchData } from '../actions/movies';

export interface IAppProps {
	fetchData: () => Promise<void>;
	movies: IMovieDTO[];
}

class App extends React.Component<IAppProps> {

	public componentDidMount() {
		this.props.fetchData();
	}

	public render() {
		return (
			<ErrorBoundry>
				<div className="App">
					<BrowserRouter>
						<Header />
						<Switch>
							<Route exact path={routes.HOME.path} component={SearchBy} />
							<Route exact path={routes.MOVIE_ID.path} component={MovieItem} />
							<Route exact path={routes.TO_MOVIE.path} component={SearchBy} />
							<Route path={"/404"} component={NotFound} />
							<Redirect to="/404" />
						</Switch>
						<React.Fragment>
							<MovieList movies={this.props.movies} />
						</React.Fragment>
						<Footer />
					</BrowserRouter>
				</div>
			</ErrorBoundry>
		);
	}
}

const mapStateToProps = (state: { movies: { movies: IMovieDTO[] } }) => {
	return {
		movies: state.movies.movies as IMovieDTO[],
	};
};

const mapDispatchToProps = (dispatch: any) => {
	const res = {
		fetchData: () => dispatch(fetchData()),
	};
	return res;
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
