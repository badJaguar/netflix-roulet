import axios, { AxiosResponse } from "axios";

import { Dispatch } from "redux";
import { IMovieDTO } from "../DAL/IMovie";

export const SortBy = {
	ReleaseDate: "&sortBy=release_date",
	Votes: "&sortBy=vote_count",
};

export const OrderBy = {
	asc: "&sortOrder=asc",
	desc: "&sortOrder=desc",
};

const apiUrl = "https://reactjs-cdp.herokuapp.com/movies/";
const moviesQtyToDisplay = "?limit=40";

export const fetchData = () => async (dispatch: Dispatch) => {

	const moviesList =
		await axios.get(`${apiUrl}${moviesQtyToDisplay}${SortBy.ReleaseDate}${OrderBy.desc}`) as AxiosResponse<IMovieDTO[]>;
	if (moviesList.status !== 200) {
		throw new Error(moviesList.statusText);
	}
	return dispatch({
		payload: moviesList.data,
		type: "MOVIES_FETCH_DATA_SUCCESS",
	});
};

export const sortAndOrderData = () => async (dispatch: Dispatch) => {

	const moviesList =
		await axios.get(`${apiUrl}${moviesQtyToDisplay}${SortBy.Votes}${OrderBy.desc}`) as AxiosResponse<IMovieDTO[]>;
	if (moviesList.status !== 200) {
		throw new Error(moviesList.statusText);
	}
	return dispatch({
		payload: moviesList.data,
		type: "MOVIES_SORT_AND_ORDER_DATA",
	});
};
