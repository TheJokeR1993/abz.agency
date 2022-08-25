
import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    card : ['','','','','',''],
    total_users : null,

}


const  cardSlice = createSlice({
    name : "card",
    initialState,
    reducers : {
       firstStateUsers (state,action){
            state.card = action.payload.users
            state.total_users=action.payload.total_users
        },
        addChangeState(state,action){
              state.card.push(...action.payload)
              
        },
        unshiftChangeState(state,action){     
           
            state.card.unshift(...action.payload)

        },
        changeTotalUsers(state,action){     
            state.total_users=action.payload

        }
    }
})

export const  {changeTotalUsers,firstStateUsers,addChangeState,unshiftChangeState} = cardSlice.actions

export default cardSlice.reducer