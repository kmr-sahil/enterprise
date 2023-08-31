import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    products: [],
    amount: 0,
    total: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {

        addToCart: (state, {payload}) => {
            const productIndex = state.products.findIndex((item) => item.id === payload.id);
            if(productIndex >= 0) {
                state.products[productIndex].quantity += 1
                state.total += state.products[productIndex].price
            }
            else {
                const temp = {...payload, quantity: 1}
                state.products.push(temp)
                state.total += payload.price
            }
            state.amount++
            console.log(state.total)
        },

        deleteItem: (state, {payload}) => {
            const productIndex = state.products.findIndex((item) => item.id === payload.id);
            
            state.products[productIndex].quantity -= 1
            state.amount--
            state.total -= state.products[productIndex].price
        }
 
    }
})

export const { addToCart, deleteItem } = cartSlice.actions

export default cartSlice.reducer;