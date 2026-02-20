import { createSlice } from '@reduxjs/toolkit'

const getSavedCart = () => {
    try {
        const raw = localStorage.getItem('cartItems');
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        return [];
    }
}

const initialState = {
    value: [],
    cart: getSavedCart(),
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

        cartreducer: (state, action) => {
            const product = action.payload;
            const idx = state.cart.findIndex(item => item.id === product.id);
            if (idx > -1) {
                const existing = state.cart[idx];
                existing.quantity = (existing.quantity || 1) + 1;
                state.cart[idx] = existing;
            } else {
                state.cart.push({ ...product, quantity: 1 });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cart));
        },
        updatequantity: (state, action) => {
            const { id, quantity } = action.payload;
            const idx = state.cart.findIndex(item => item.id === id);
            if (idx > -1) {
                state.cart[idx].quantity = quantity;
                localStorage.setItem('cartItems', JSON.stringify(state.cart));
            }
        },

        removecart: (state, action) => {
            const idx = state.cart.findIndex(item => item.id === action.payload);
            if (idx > -1) state.cart.splice(idx, 1);
            localStorage.setItem('cartItems', JSON.stringify(state.cart));
        },

        clearCart: (state) => {
            state.cart = [];
            localStorage.setItem('cartItems', JSON.stringify(state.cart));
        },

    },
})

export const { productreducer, categoryreducer, cartreducer, updatequantity, removecart, clearCart } = roductSlice.actions

export default roductSlice.reducer