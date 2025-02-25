import { createSlice } from  '@reduxjs/toolkit' ;
import type { PayloadAction } from  '@reduxjs/toolkit' ;

export type User = {
    firstName:  string ,
    lastName :  string ,
    email :  string ,
    age : number,
    gender :  string,
    photo :  string ,
    skills : string[],
}

type InitialState =  {
    info: User | null
}

const initialState : InitialState = {
    info: null
}

const userSlice =  createSlice({
    name: 'user',
    initialState,
    reducers:{
            addUser: (state = initialState, action: PayloadAction<NonNullable<User>>)=> {state.info = action.payload},
            removeUser: ()=> {}
    }
})

export const {addUser, removeUser} = userSlice.actions
export default userSlice.reducer