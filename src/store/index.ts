import { configureStore } from '@reduxjs/toolkit'
import prizeSlice from "./PrizeSlice"
import laureatesSlice from "./LaureatesSlice"


export const store = configureStore({
  reducer: {
    prize: prizeSlice,
    laureates : laureatesSlice
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch