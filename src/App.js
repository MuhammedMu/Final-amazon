import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Nav from "./Components/Nav/Nav";
import Ads from "./Components/Ads/Ads"
import Checkout from "./Components/Checkout/Checkout"
import CheckoutProduct from "./Components/CheckoutProduct/CheckoutProduct";

function App() {
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
                  <Checkout />
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
