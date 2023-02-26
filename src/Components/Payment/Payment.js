import { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import { useDataGlobaly } from "../StateProvider/StateProvider";
import "./Payment.css"

function Payment() {
  const { basket, RemoveCart } = useDataGlobaly();

  const [totlaPrice, setTotalPrice] = useState(0);

  console.log(basket);
  let totalPrice = 0;

   useEffect(() => {
     let tp = 0;
     const total = basket?.map((bs) => {
       tp += Number(bs.price);
     });

     setTotalPrice(tp);
   }, [basket]);
  
  
  return (
    <div>
      <div className="payment-banner-title">
        Checkout{" "}
        <Link to={"/checkout"}>
          <span>({basket.length}: items)</span>{" "}
        </Link>
      </div>

      <div className="payment-checkout-outer-wraper">
        {basket?.map((singleBasket) => {
          totalPrice += Number(singleBasket.price);

          return (
            <div className="payment-cart-wraper">
              <div className="payment-carts">
                <hr />
                <div className="payment-all-data">
                  <div className="payment-product-img">
                    <img src={singleBasket.image} alt="" srcset="" />
                  </div>
                  <div className="payment-data">
                    <div className="payment-title-wraper">
                      <div className="title">{singleBasket.title}</div>
                      <div className="price">${singleBasket.price}</div>
                    </div>

                    <p className="payment-checkoutProduct__rating">
                      {Array(singleBasket.rating)
                        .fill()
                        .map((value, index) => {
                          return (
                            <p key={index} className="rating-count">
                              ⭐
                            </p>
                          );
                        })}
                    </p>

                    <div className="instock">in Stock</div>
                    <div className="shipping">Eligible for FREE Shipping</div>
                    <div className="gift">This is a gift</div>
                    <div className="style">
                      Style: Advanced Fast Heatup Technology
                    </div>
                  </div>
                </div>

                <hr />
              </div>
            </div>
          );
        })}
        
      <CurrencyFormat
        renderText={(value) => (
          <>
            <div className="payment-footer-wraper">
              <div className="payment-footer-title">Payment Method </div>
              <div className="payment-footer">
                <div>Card number</div>
                <div className="payment-sub-total">
                  Order total ( {basket.length} item ): {value}
                </div>
                <div className="payment-buynow">
                  <button>Buy Now</button>
                </div>
              </div>
            </div>
          </>
        )}
        decimalScale={2}
        value={totlaPrice}
        displayType="text"
        thousandSeparator={true}
        prefix={"$"}
      />
      </div>

    </div>
  );
}

export default Payment;
