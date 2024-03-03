import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMovie, IMovieList} from "../interfaces";

const movieService = {
    getAll: (page:string = '1', with_genres:string = '', ):IRes<IMovieList> => apiService.get(urls.movies.list, {params:{page, with_genres}}),
    byId: (id:number):IRes<IMovie> => apiService.get(urls.movies.byId(id))
}

export {
    movieService
}