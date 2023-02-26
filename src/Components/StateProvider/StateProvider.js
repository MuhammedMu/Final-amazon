import React, { useContext, useReducer } from "react";
import { reducer } from "../Reducer/Reducer";

export const DataContext = React.createContext();

function StateProvider({ children }) {
  const initialState = {
    basket: [],
    user: null,
  };

  const AddToCart = (id) => {
    // console.log(state.basket
    dispatch({ type: "ADD_TO_BASKET", payload: id });
  };

  const RemoveCart = (id) => {
    // console.log(state.basket
    dispatch({ type: "REMOVE_FROM_BASKET", payload: id });
  };

  const SigninUser = (user) => {
    // console.log(state.basket
    dispatch({ type: "SET_USER", payload: user });
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider
      value={{ ...state, AddToCart, RemoveCart, SigninUser }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataGlobaly = () => {
  return useContext(DataContext);
};

export default StateProvider;

// const {basket} = initialState  -> object destructuring

// dispatch is for manager create the task (for transfering orders)
// reducer is for accomplishing the task

// state is an object that stores the current state of the application. 
// dispatch is an object that stores the function that will be called when the state changes.