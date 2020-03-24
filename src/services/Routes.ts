export const publicPath = "/";
export const moviePath = "movies/";
export const id = ":id";

export const routes = {
	HOME: {
		path: `${publicPath}`,
	},
	MOVIE_ID: {
		path: `${publicPath}${moviePath}${id}`,
	},
	TO_MOVIE: {
		path: `${publicPath}${moviePath}`,
	},
};
