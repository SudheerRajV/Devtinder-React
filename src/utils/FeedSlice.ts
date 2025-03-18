import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type FeedUser = { 
    _id?:  string | undefined; 
    firstName?: string | undefined;
lastName?: string | undefined;
email?: string | undefined;
age?: number | undefined;
gender?: string | undefined;
photo?: string | undefined;
skills: string[]
}

type InitialState = {
    users: FeedUser[] | null
}

const initialState: InitialState = {
    users: null
}

const feedSlice = createSlice({
    name: 'feeds',
    initialState,
    reducers:{
        addFeeds: (state: InitialState, action: PayloadAction<NonNullable<FeedUser[]>>) => {state.users = action.payload},
        removeFeeds: (state: InitialState) =>{state.users = []},
        removeFeed: (state: InitialState, action: PayloadAction<NonNullable<FeedUser>>) =>{state.users = state.users?.filter((user)=> user._id !== action.payload._id) || []},
    }
})

export const {addFeeds, removeFeeds, removeFeed} = feedSlice.actions
export default feedSlice.reducer