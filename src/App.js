import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Nav from "./Components/Nav/Nav";
import Ads from "./Components/Ads/Ads";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDataGlobaly } from "./Components/StateProvider/StateProvider";

function App() {

  const { SigninUser } = useDataGlobaly();
  


  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log(authUser.email)
      if (authUser) {
        SigninUser(authUser.email);
      }
    });
  },[] );

  return (
    <div className="App">
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <Header />
                  <Nav />
                  <Home />
                </>
              }
            />
            <Route
              path="/checkout"
              element={
                <>
                  <Header />
                  <Ads />
                  {/* <Login /> */}
                  <Checkout />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
              
                  <Login />
                  
                </>
              }
            />
          </Routes>
        </Router>
        {/* <Products /> */}
      </div>
    </div>
  );
}

export default App;
