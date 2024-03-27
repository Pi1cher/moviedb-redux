import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenre} from "../../interfaces";
import {AxiosError} from "axios";
import {genreService} from "../../services";

interface IState {
    genres: IGenre[]
}

const initialState:IState = {
    genres:[]
}


const getAll = createAsyncThunk<{genres: IGenre[]}, void>(
    'genresSlice/getAll',
    async (_, {rejectWithValue})=>{
        try {
            const {data} = await genreService.getAll()
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
    )

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload.genres
            })
})

const {reducer: genresReducer, actions} = genresSlice;

const genresActions = {
    ...actions,
    getAll
}

export {
    genresReducer,
    genresActions
}