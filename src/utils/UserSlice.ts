import { createSlice } from  @reduxjs/toolkit ;
import type { PayloadAction } from  @reduxjs/toolkit ;

type User = {
    firstName:  string ,
    lastName :  string ,
    email :  string ,
    age : number,
    gender :  string,
    photo :  string ,
    skills : string[],
} | null

const initialState : User = null

const userSlice =  createSlice({
    name: 'user',
    initialState,
    reducers:{
            addUser: (state: any, action: PayloadAction<User>)=>{
                state.value = action.payload
            },
            removeUser: (state: any)=>{
                state.value = null
            }
    }
})

export const {addUser, removeUser} = userSlice.actions
export default userSlice.reducer