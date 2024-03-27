import {configureStore} from "@reduxjs/toolkit";
import {movieListReducer, themeReducer} from "./slices";

const store = configureStore({
    reducer:{
        movieList: movieListReducer,
        theme: themeReducer
    }
});

export {
    store
}