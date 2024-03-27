import {createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces";

interface IState {
    movieDetails: IMovie
}



const initialState:IState = {
    movieDetails: {
        id:0,
        title:'',
        poster_path: '',
        vote_average:0,
        genres: [],
        overview: '',
        tagline: '',
        runtime: 0
    }
}



const movieInfoSlice = createSlice({
    name: 'movieInfoSlice',
    initialState,
    reducers: {},
})

const {reducer: movieInfoReducer, actions} = movieInfoSlice;

const movieInfoActions = {
    ...actions
}

export {
    movieInfoActions,
    movieInfoReducer
}