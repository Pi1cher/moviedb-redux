import {createSlice} from "@reduxjs/toolkit";

interface IState {
    theme: boolean
}

const initialState:IState = {
    theme: true
}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers:{
        toggleTheme: (state, action) =>{
            state.theme = action.payload
        }
    }
})

const {reducer: themeReducer, actions} = themeSlice;

const themeActions = {
    ...actions
}

export {
    themeActions,
    themeReducer
}