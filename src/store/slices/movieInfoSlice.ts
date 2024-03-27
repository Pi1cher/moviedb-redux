import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces";
import {AxiosError} from "axios";
import {movieService} from "../../services";

interface IState {
    movieDetails: IMovie
}


const initialState: IState = {
    movieDetails: {
        id: 0,
        title: '',
        poster_path: '',
        vote_average: 0,
        genres: [],
        overview: '',
        tagline: '',
        runtime: 0
    }
}

const byId = createAsyncThunk<IMovie,{id: number }>(
    'movieInfoSlice/byId',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.byId(id);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)


const movieInfoSlice = createSlice({
    name: 'movieInfoSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(byId.fulfilled, (state, action)=>{
                state.movieDetails = action.payload
            })

})

const {reducer: movieInfoReducer, actions} = movieInfoSlice;

const movieInfoActions = {
    ...actions,
    byId
}

export {
    movieInfoActions,
    movieInfoReducer
}