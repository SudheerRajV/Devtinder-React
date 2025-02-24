import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './UserSlice'

export const store = configureStore({
    reducer:{
        user: UserReducer
    }
})

// Infer RootState and AppDispatch types are from store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch