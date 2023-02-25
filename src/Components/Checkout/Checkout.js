import React from "react";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

// import img1 from "../../images/img1.jpg"
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";

import { useDataGlobaly } from "../StateProvider/StateProvider";

function Checkout({ id, image, title, price, rating }) {
  const { basket } = useDataGlobaly();

  return (
    <div className="checkout-both">
      
        <CheckoutProduct />
       

      <div className="checkout-rights">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
