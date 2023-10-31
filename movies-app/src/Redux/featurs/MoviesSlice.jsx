import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    Data:[],
}
const  MoviesSlice = createSlice({
    name:'Movies',
    initialState,
    reducers:{
        handelGetMovies:(state,payload)=>{
           state.Data=payload
        }
    }
})
export const {handelGetMovies}  = MoviesSlice.actions
export default MoviesSlice.reducer