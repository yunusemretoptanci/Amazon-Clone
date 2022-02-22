import { useStateValue } from "./StateProvide";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css"
const Subtotal = () => {
  const [{ basket }] = useStateValue();
  return (
    <CurrencyFormat
      renderText={(value) => (
        <div className="proceed">
          <div className="sub-total">
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small>
              {" "}
              <input type={"checkbox"}></input> This order contains a gift
            </small>
            <Link to={"/payment"}>
              <button>Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
    ></CurrencyFormat>
  );
};

export default Subtotal;
