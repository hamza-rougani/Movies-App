import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../featurs/authSlice'
import MoviesReducer from '../featurs/MoviesSlice'
const Store = configureStore({
    reducer:{
        auth:authReducer,
        Movies:MoviesReducer,
    }
})
export default Store