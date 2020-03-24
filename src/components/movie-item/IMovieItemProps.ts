import { match } from "react-router";
import { IMovieDTO } from "../../DAL/IMovie";

export interface IMovieItemProps {
	match: match<{ id: string }>;
	fetchMovie: (url: string) => Promise<void>;
	movies: IMovieDTO[];
	sortValue: string;
}
