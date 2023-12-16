import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { Link, useNavigate } from "react-router-dom";
import { useDataGlobaly } from "../StateProvider/StateProvider";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import axios from "../../axios";
import "./Payment.css";

function Payment() {
  const { basket, user, Removebasket, RemoveAllCart } = useDataGlobaly();
  const [totalPrice, setTotalPrice] = useState(0);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  useEffect(() => {
    let getBasketTotal = 0;
    basket?.forEach((bs) => {
      getBasketTotal += Number(bs.price);
    });
    setTotalPrice(getBasketTotal);
  }, [basket]);

  const handleSubmit = async () => {
    try {
      const { paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      const response = await axios.post(
        `https://gold-jittery-alligator.cyclic.app/payment?total=${totalPrice}`,
        { paymentMethod }
      );

      const client_secret = response.data.secret;

      const paymentConfirmation = await stripe.confirmCardPayment(
        client_secret,
        {
          payment_method: paymentMethod.id,
        }
      );

      console.log("RESPONSE AFTER COMPLETING PAYMENT ", paymentConfirmation);

      if (paymentConfirmation.paymentIntent.status === "succeeded") {
        const reference = collection(db, user?.uid);
        await addDoc(reference, { ...basket });

        RemoveAllCart();
        navigate("/orders");
      } else {
        console.error("Payment failed");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <div className="payment-banner-title">
        <Link to={"/checkout"}>
          <h2>
            <span>Checkout</span>
            <span> ({basket.length}: items)</span>
          </h2>
        </Link>
      </div>

      <div className="payment-checkout-outer-wrapper">
        {/* ... rest of your component ... */}
        <CurrencyFormat
          renderText={(value) => (
            <>
              <CardElement className="card-element" />
              <div className="payment-footer-wraper">
                <div className="payment-footer-title">Payment Method </div>
                <div className="payment-footer">
                  <div className="payment-sub-total">
                    Order total ( {basket.length} item ): {totalPrice}
                  </div>
                  <div className="payment-buynow">
                    <button onClick={handleSubmit}>Buy Now</button>
                  </div>
                </div>
              </div>
            </>
          )}
          decimalScale={2}
          value={totalPrice}
          displayType="text"
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
    </div>
  );
}

export default Payment;
