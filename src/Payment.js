import { useStateValue } from "./StateProvide";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import React from "react";
import "./style.css"
import "./style.css"
import { getBasketTotal } from "./reducer";

const Payment = () => {
  const [{ user, basket }] = useStateValue();

  return (
    <div className="payment-main">
      <h1 className="payment-head">Checkout ({basket.length} items)</h1>
      <div className="payment-area">
        <div className="items-delivery">
          <div className="delivery-addres">
            <div className="addres-text">
              <h3>Delivery Addres</h3>
            </div>
            <div>
              <p>{user?.email}</p>
              <p>123 React Lane</p>
              <p>Los Angeles, CA</p>
            </div>
          </div>

          <div className="items">
            <div className="items-head-text">
              <h3>Review items and delivery</h3>
            </div>
            <div className="item-list">
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                />
              ))}
            </div>
          </div>

          <div className="payment-section">
            <div className="payment">
              <h3>Paymnet Method</h3>
            </div>
            <div className="payment-details">
              <form>
                <CardElement />
                <div className="payment-price">
                  <CurrencyFormat
                    renderText={(value) => <h3>Order Total: {value}</h3>}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  <button>Buy Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
