import {configureStore} from "@reduxjs/toolkit";
import {genresReducer, movieInfoReducer, movieListReducer, themeReducer} from "./slices";

const store = configureStore({
    reducer:{
        movieList: movieListReducer,
        theme: themeReducer,
        genres: genresReducer,
        movieInfo: movieInfoReducer
    }
});

export {
    store
}