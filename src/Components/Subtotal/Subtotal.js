import React, { useEffect, useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useDataGlobaly } from "../StateProvider/StateProvider";
// import { getBasketTotal } from '../Reducer/Reducer';
function Subtotal() {
  const [totlaPrice, setTotalPrice] = useState(0);
  const { basket } = useDataGlobaly();

  useEffect(() => {
    let tp = 0;
    const total = basket?.map((bs) => {
      tp += Number(bs.price);
    });

    setTotalPrice(tp);
  }, [basket]);
  return (
    <div className="subtotal">
      {/* {console.log(basket)} */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ( items): <strong> {value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totlaPrice}
        displayType="text"
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
