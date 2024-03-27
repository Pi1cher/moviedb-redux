import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {IMovieList} from "../../interfaces";
import {AxiosError} from "axios";
import {movieService, searchService} from "../../services";



const initialState: IMovieList = {
    page: null,
    results: [],
    total_pages: null,
    total_results: null,
    prev:null,
    next:null
};

const getAll = createAsyncThunk<IMovieList, {page:string, with_genres:string}>(
    'movieListSlice/getAll',
    async ({page, with_genres}, {rejectWithValue}) =>{
        try {
            const {data} = await movieService.getAll(page,with_genres)
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const searchByQuery = createAsyncThunk <IMovieList, {page:string, query:string|null}>(
    'movieListSlice/searchByQuery',
    async ({page, query}, {rejectWithValue}) =>{
        try {
            const {data} = await searchService.searchByQuery(page, query)
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)


const movieListSlice = createSlice({
    name: 'movieListSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addMatcher(isFulfilled(getAll, searchByQuery), (state, action) =>{
                state.page = action.payload.page
                state.results = action.payload.results
                state.total_results = action.payload.total_results
                state.total_pages = action.payload.total_pages
                if (state.page === 1) {
                    state.prev = null;
                    state.next = (+state.page + 1).toString();
                } else if (state.total_pages === state.page) {
                    state.prev = (+state.page - 1).toString();
                    state.next = null;
                } else {
                    state.prev =  (+state.page - 1).toString();
                    state.next =  (+state.page + 1).toString()

                }
                window.scrollTo(0, 0)
            })

})

const {reducer: movieListReducer, actions} = movieListSlice;

const movieListActions = {
    ...actions,
    getAll,
    searchByQuery
}

export {
    movieListReducer,
    movieListActions
}
