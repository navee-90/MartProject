import { createSlice } from '@reduxjs/toolkit';

let initialCart = JSON.parse(localStorage.getItem('cart')) || []

let cartSlice = createSlice(
    {
        name:'cart',
        initialState : initialCart,
        reducers : {
            ADDTOCART :(state,action)=>{
                let item = action.payload
                let existingItem = state.find(cartItem => cartItem.id === item.id)
                if(existingItem){
                    existingItem.quantity +=1
                }else{
                    state.push({...item, quantity: 1} )
                }
                localStorage.setItem('cart',JSON.stringify(state))
            },
            REMOVEFROMCART :(state,action)=>{
                let id = action.payload
                let updatedCart = state.filter(cartItem=> cartItem.id !== id)
                localStorage.setItem('cart',JSON.stringify(updatedCart))
                return  updatedCart
            },
            IncQuantity : (state,action)=>{
                let id = action.payload
                let item = state.find(cartItem => cartItem.id === id)
                if(item)item.quantity +=1 
                localStorage.setItem('cart',JSON.stringify(state))
            },
            DecQuantity : (state,action)=>{
                let id = action.payload
                let item = state.find(cartItem => cartItem.id == id)
                if(item && item.quantity > 1){
                    item.quantity-=1
                }
                localStorage.setItem('cart',JSON.stringify(state))
            }
        }
    }
)
export const {ADDTOCART,REMOVEFROMCART,IncQuantity,DecQuantity} = cartSlice.actions
export default cartSlice.reducer