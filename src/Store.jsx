import { configureStore } from '@reduxjs/toolkit'
import { roductSlice } from './slices/roductslice'

export const store = configureStore({
    reducer: {
        allProduct : roductSlice.reducer
    },
})

