
import { createSlice } from "@reduxjs/toolkit";



 const initialState = {
    name: "",
    email: "",
    phone: "",
    position_id: 1,
    photo: "",
    position : "",
    success : false,
    error:''

}


const  formSlice = createSlice({
    name : "form",
    initialState,
    reducers : {
       getPosition(state,action){
        state.position = action.payload
       },
       onChangeState(state,action){
         state[action.payload.key]=action.payload.value
       }
    }
})

export const {getPosition,onChangeState} = formSlice.actions

export default formSlice.reducer