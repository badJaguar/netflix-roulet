export interface IMovieDTO {
    id: number;
    title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    overview: string;
    poster_path: string;
    budget: number;
    revenue: number;
    genres: string[];
    runtime: number;
}
