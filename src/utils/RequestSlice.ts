import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "./UserSlice"

export type RequestUsers = {
    _id: string,
    fromUserId: User
}

type InitialState = {
    users: RequestUsers[] | null
}

const initialState: InitialState = {
    users: null
}

const requestSlice = createSlice({
    name: 'requests',
    initialState,
    reducers: {
        addRequests: (state: InitialState, action: PayloadAction<NonNullable<RequestUsers[]>>) => {state.users = action.payload},
        clearRequests: (state: InitialState) => {state.users = []},
        removeRequest: (state: InitialState, action: PayloadAction<NonNullable<RequestUsers>>) => {state.users = state.users?.filter((user: RequestUsers)=> user._id !== action.payload._id) || []}
    }
})

export const {addRequests, clearRequests, removeRequest} = requestSlice.actions
export default requestSlice.reducer