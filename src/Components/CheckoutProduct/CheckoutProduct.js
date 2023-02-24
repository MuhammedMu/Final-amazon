import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider/StateProvider";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
    // toast("Item removed from basket!");
  };

  return (
    <div className="checkout-outer-wraper">
      <div className="cart-wraper">
        <div className="carts">
          <div className="banner-title">Shooping Cart</div>

          <hr />
          <div className="all-data">
            <div className="product-img">
              <img src={image} alt="" srcset="" />
            </div>
{/* <div></div> */}
            <div className="data">
              <div className="title-wraper">
                <div className="title">{title}</div>
                <div className="price">${price}</div>
              </div>

              <p className="checkoutProduct__rating">
                {Array(rating)
                  .fill()
                  .map((value, index) => {
                    return (
                      <div key={index} className="rating-count">
                        ⭐
                      </div>
                    );
                  })}
              </p>

              <div className="instock">in Stock</div>
              <div className="shipping">Eligible for FREE Shipping</div>
              <div className="gift">This is a gift</div>
              <div className="style">
                Style: Advanced Fast Heatup Technology
              </div>
              <div className="color">Color: Blue</div>
              <div className="quantity">
                <div>
                  <select name="1" id="">
                    <option value="1">Qty: 1</option>
                    <option value="2">Qty: 2</option>
                    <option value="3">Qty: 3</option>
                    <option value="4">Qty: 4</option>
                    <option value="5">Qty: 5</option>
                    <option value="6">Qty: 6</option>
                    <option value="7">Qty: 7</option>
                    <option value="8">Qty: 8</option>
                    <option value="9">Qty: 9</option>
                    <option value="10+">Qty: 10</option>
                  </select>
                </div>

                <div className="last-edit">
                  <ul>
                    <li>
                      | <a href="/">Delete</a> |
                    </li>
                    <li>
                      <a href="/">Save for later</a> |
                    </li>
                    <li>
                      <a href="/">Compare with similar items</a> |
                    </li>
                    <li>
                      <a href="/">Share</a> |
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <button className="remove-button" onClick={removeFromBasket}>
            Remove from basket
          </button>
          <hr />
          <div className="sub-total">
            Subtotal ({basket.length} item): $198.77
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
