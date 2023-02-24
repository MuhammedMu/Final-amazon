import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider/StateProvider';
// import { getBasketTotal } from '../Reducer/Reducer';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  
  return (
    <div className="subtotal">
      {/* {console.log(basket)} */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix={""}
      />
      <button
        
      >
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal