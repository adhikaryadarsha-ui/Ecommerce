import React, { createContext, useState } from "react";
import all_product from "../components/Assets/all_product";

// Create the context (PascalCase for convention)
export const ShopContext = createContext();

  const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
      cart[index] = 0;
    }
    return cart;
  };

const ShopContextProvider = (props) => {

  const [cartItem, setCartItem] = useState(getDefaultCart());

 

  const addToCart = (itemoId)=>{
    setCartItem((prev) => ({ ...prev, [itemoId]: prev[itemoId]+1 }));
    console.log(cartItem);
  }

  const removeFromCart = (itemoId) => {
    setCartItem((prev) => ({ ...prev, [itemoId]: prev[itemoId] -1 }));
  };
 const contextValue = { all_product, cartItem, addToCart, removeFromCart };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
      </ShopContext.Provider>
  );
};

export default ShopContextProvider;
