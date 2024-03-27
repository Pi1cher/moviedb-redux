import {IMovie} from "./movieInterface";

export interface IMovieList {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
    prev: string;
    next: string;
}