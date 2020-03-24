import { AnyAction } from "redux";
import { IMovieDTO } from "../DAL/IMovie";

const initialState = {
	movies: [] as IMovieDTO[],
};
export const movies = (state: any = initialState, action: AnyAction) => {
	switch (action.type) {
		case "MOVIES_FETCH_DATA_SUCCESS":
			return {
				movies: action.payload.data,
			};
		default: {
			return {
				...state,
			};
		}
	}
};
