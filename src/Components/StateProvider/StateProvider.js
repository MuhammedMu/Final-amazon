import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
































// import reducer from "../Reducer/Reducer";
// import React, { useContext, useEffect, useReducer } from "react";
// import ProductsData from "./Components/Products/ProductsData";
// import { auth } from "./Firebase";
// // import { onAuthStateChanged } from "firebase/auth";

// const DataContext = React.createContext();

// const initialState = {
//   amount: 0,
//   total: 0,
//   cart: [],
//   user: null,
//   products: ProductsData,
// };

// function ContextProvider({ children }) {
//   const [state, dispach] = useReducer(reducer, initialState);

//   const AddToCart = (id) => {
//     dispach({ type: "ADD_TO_CART", payload: id });
//   };
//   const Remove = (id) => {
//     dispach({ type: "REMOVE", id: id });
//   };
//   const LogIn = (userInfo) => {
//     dispach({ type: "LOGIN", loginUser: userInfo });
//   };
//   const Logout = () => {
//     dispach({ type: "LOGOUT" });
//   };

//   useEffect(() => {
//     auth.onAuthStateChanged((authUser) => {
//       authUser
//         ? dispach({ type: "SET_USER", payload: authUser })
//         : dispach({ type: "SET_USER", payload: null });
//     });
//   }, []);

//   return (
//     <DataContext.Provider
//       value={{ ...state, AddToCart, Remove, LogIn, Logout }}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// }

// export const useGlobalDataContext = () => {
//   return useContext(DataContext);
// };

// export default ContextProvider;
