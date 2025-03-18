import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "./UserSlice"


type InitialState = {
    users: User[] | null
}

const initialState: InitialState = {
    users: null
}

const connectionSlice = createSlice({
    name: 'connections',
    initialState,
    reducers: {
        addConnections: (state: InitialState, action: PayloadAction<NonNullable<User[]>>) => {state.users = action.payload},
        clearConnections: (state: InitialState) => {state.users = []}
    }
})

export const {addConnections, clearConnections} = connectionSlice.actions
export default connectionSlice.reducer

