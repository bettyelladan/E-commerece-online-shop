import React, { createContext } from "react"
import all_product from "../Components/Assets/all_product";
import { useState } from "react";


export const ShopContext = createContext(null);
const getDefaultCart = ()=> {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
     cart[index] = 0;
    } 
    return cart;
 }

 const ShopContextProvider = (props) => {
console.log(props.children)

   const [cartItem,setCartItems] = useState(getDefaultCart());
   
   const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItem);
   }

   const removeFromCart = (itemId) => {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    
}

const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItem)
    {
       if(cartItem[item]>0)
        {
         let itemInfo = all_product.find((product)=>product.id===Number(item))
         totalAmount += itemInfo.new_price * cartItem[item];
        } 

    }
    return totalAmount;
}

const getTotalCartItem = () =>{
    let totalItem = 0;
    for(const item in cartItem)
    {
        if(cartItem[item]>0)
        {
            totalItem+= cartItem[item]
        }
    }
    return totalItem;
}

const contextValue = {getTotalCartItem,getTotalCartAmount,all_product,cartItem,addToCart,removeFromCart};

     

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider