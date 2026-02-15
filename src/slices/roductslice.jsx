import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const roductSlice = createSlice({
    name: 'value',
    initialState,
    reducers: {
        productreducer: (state, action) => {
            state.value = action.payload
        },
        categoryreducer: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { productreducer, categoryreducer } = roductSlice.actions

export default roductSlice.reducer