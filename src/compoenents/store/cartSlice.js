import { createSlice } from '@reduxjs/toolkit'
export const cartSlice = createSlice({
    name:"cart-items",
    initialState:{
        cart:[],
        
    },
    reducers:{
        addCartData:(state,action)=>{
         state.cart.push(action.payload);
        }
        
       
    }
})
export const { addCartData} = cartSlice.actions;
export default cartSlice.reducer