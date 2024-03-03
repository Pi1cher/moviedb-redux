import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMovieList} from "../interfaces";

const searchService = {
    searchByQuery: (page:string = '1', query:string = ''):IRes<IMovieList> => apiService.get(urls.movies.search, {params: {page, query}})
}

export {
    searchService
}