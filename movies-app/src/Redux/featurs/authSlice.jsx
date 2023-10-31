import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    isTrue:false,
}
const  authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        handelSlideImg:(state,payload)=>{
           state.isTrue=payload
        }
    }
})
export const {handelSlideImg}  = authSlice.actions
export default authSlice.reducer