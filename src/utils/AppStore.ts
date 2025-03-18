import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './UserSlice'
import ConnectionsReducer from'./ConnectionSlice'
import RequestsReducer from'./RequestSlice'
import FeedsReducer from './FeedSlice'

export const store = configureStore({
    reducer:{
        user: UserReducer,
        connections: ConnectionsReducer,
        requests: RequestsReducer,
        feeds: FeedsReducer
    }
})

// Infer RootState and AppDispatch types are from store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch