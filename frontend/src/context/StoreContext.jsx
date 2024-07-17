import { createContext, useEffect, useState } from "react";
import axios from 'axios'

// Create a context for storing global state
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // Define state to store cart items
  const [cartItems, setcartItems] = useState({});
  const url = "http://localhost:4000"
  const [token,setToken] = useState("")
  const [food_list,setFoodList] = useState([])

  // Function to add an item to the cart
  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      // If item is not already in the cart, add it with quantity 1
      setcartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      // If item is already in the cart, increment its quantity by 1
      setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = async (itemId) => {
    // Decrement the quantity of the item in the cart by 1
    setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    }
  };

  // Function to calculate the total amount in the cart
  const getTotalCartAmount = () => {
    let totalamount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // Find the item information from the food_list
        let itemInfo = food_list.find((product) => product._id === item);
        // Calculate the total amount for each item and add it to the total
        totalamount += itemInfo.price * cartItems[item];
      }
    }
    return totalamount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url+"/api/food/list");
    setFoodList(response.data.data)
  }

  const loadCartData = async (token) => {
    const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
    setcartItems(response.data.cartData);
  }

  useEffect(()=>{
   
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
          setToken(localStorage.getItem("token"));
          await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  },[])

  // Context value containing state and functions to be shared with child components
  const contextValue = {
    food_list, // List of available food items
    cartItems, // Cart items and their quantities
    setcartItems, // Function to update cart items
    addToCart, // Function to add an item to the cart
    removeFromCart, // Function to remove an item from the cart
    getTotalCartAmount, // Function to calculate total cart amount
    url,
    token,
    setToken
  };

  // Provide the context value to the child components
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
