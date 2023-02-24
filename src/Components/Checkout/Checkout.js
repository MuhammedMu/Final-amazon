import React from 'react'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';

// import img1 from "../../images/img1.jpg"
import { useStateValue } from '../StateProvider/StateProvider';
import Subtotal from '../Subtotal/Subtotal';
import "./Checkout.css"

function Checkout({ id, image, title, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
    // toast("Item removed from basket!");
  };

  return (
    <div className="checkout-both">
      <div>
        <CheckoutProduct />

        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>

      <div className="checkout-rights">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout