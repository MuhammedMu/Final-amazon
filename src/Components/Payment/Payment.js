import React, { useEffect, useState } from "react";
import { CardElement } from "@stripe/react-stripe-js";
import { NumericFormat as CurrencyFormat } from "react-number-format";
import { Link, useNavigate } from "react-router-dom";
import { useDataGlobaly } from "../StateProvider/StateProvider";
import "./Payment.css";

function Payment() {
  const { basket, user, Removebasket, RemoveAllCart } = useDataGlobaly();
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentError, setPaymentError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    let getBasketTotal = 0;
    basket?.forEach((bs) => {
      getBasketTotal += Number(bs.price);
    });
    setTotalPrice(getBasketTotal);
  }, [basket]);

  // Checkout is a demo only: no payment server is called and no card is charged.
  const handleSubmit = () => {
    setPaymentError(
      "Checkout is disabled in this demo. No payment is taken."
    );
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
        <div
          style={{
            margin: "0 0 16px",
            padding: "12px 16px",
            border: "1px solid #f0c14b",
            background: "#fff8e1",
            borderRadius: "4px",
          }}
        >
          <strong>Demo only.</strong> This is a portfolio project, so checkout
          is disabled and no payment is taken.
        </div>
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
                    <button onClick={handleSubmit} style={{ opacity: 0.6, cursor: "not-allowed" }}>
                      Checkout disabled (demo)
                    </button>
                    {paymentError && (
                      <div style={{ color: "#b12704", marginTop: "8px" }}>
                        {paymentError}
                      </div>
                    )}
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
