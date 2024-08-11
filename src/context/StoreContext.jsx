/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const StoreContext = createContext(null);
import { toast } from "react-toastify";

const StoreContextProvider = (props) => {
  const url = "http://localhost:5000";
  const [cartItems, setCartItems] = useState({});
  const [category, setCategory] = useState("All");
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);
  //adding to cart functionality

  const addToCart = async (itemId) => {
    if (cartItems && !(itemId in cartItems)) {
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

    if (token) {
      const response = await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );

      console.log("respone", response.data);
    }
  };

  const removeFromCart = async (itemId) => {
    if (cartItems[itemId] > 0) {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId] - 1,
      }));
    }
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const loadCartData = async (token) => {
    const response = await axios.get(url + "/api/cart/get", {
      headers: { token },
    });

    setCartItems(response.data.cartData);
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
        if (itemInfo) totalAmount += itemInfo.price * cartItems[item];
      }
    }

    return totalAmount;
  };

  const fetchFoodList = async () => {
    let newUrl = url;
    newUrl += "/api/food/list";
    const response = await axios.get(newUrl);

    if (response.data.success) {
      setFoodList(response.data.data);
      console.log("Before calling toast");
      // toast.success(response.data.message);
      console.log("YYAYY");
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }

      console.log({ token }, "token");
    }

    loadData();
  }, []);

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
