import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartItems",
    initialState: [],
    reducers: {
        //ActionName:resucer Function
        addToCart: (state, actionByComponent) => {
            const existingProduct = state.find(item => item.id == actionByComponent.payload.id)
            if (existingProduct) {

            } else {
                state.push({ ...actionByComponent.payload, quantity: 1, totalPrice: actionByComponent.payload.price })
            }
        }
    }
})