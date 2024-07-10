/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = "http://localhost:5000";
  const [cartItems, setCartItems] = useState({});
  const [category, setCategory] = useState("All");
  const [token, setToken] = useState("");
  //adding to cart functionality

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: 1,
      }));
    } else {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId] + 1,
      }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    // food_list.map((item, index) => {
    //   if (cartItems[item] > 0) {
    //     totalAmount += 80;
    //   }
    // });
    // food_list.forEach();

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id == item);
        totalAmount += itemInfo.price * cartItems[item] * 80;
      }
    }

    return totalAmount;
  };

  const updateCategory = (itemCategory) => {
    setCategory(itemCategory);
  };

  const contextValue = {
    //provide any value or function and access that in the entire application
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    category,
    updateCategory,
    // getTotalCartAmount,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
