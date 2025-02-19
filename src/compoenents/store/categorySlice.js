import { createSlice } from '@reduxjs/toolkit'
export const cartSlice = createSlice({
    name:"cart-items",
    initialState:{
        category:null,
    },
    reducers:{
        addCategory:(state,action)=>{
         state.category = action.payload;
        }
        
       
    }
})
export const { addCategory} = cartSlice.actions;
export default cartSlice.reducer