import ProductsData from "../ProductsData/ProductsData";
import { auth } from "firebase/auth";

// console.log(auth)

export const reducer = (state, action) => {
  if (action.type === "ADD_TO_BASKET") {
    const newItem = ProductsData.find(
      (product) => product.id === action.payload
    );

    return {
      ...state,
      basket: [...state.basket, newItem],
    };
  }

  if (action.type === "REMOVE_FROM_BASKET") {
    const newItem = state.basket.filter((product) => {
      return product.id !== action.payload;
    });

    return {
      ...state,
      basket: newItem,
    };
    
  }

  if (action.type === "SET_USER") {

    return {
      user: action.payload,
    };
  }





  
};
