import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvide";
import Subtotal from "./Subtotal";
import React, { useEffect } from "react";
import "./style.css"
const Checkout = () => {
  const [{ user,basket }] = useStateValue();

  return (
    <div className="checkout-page">
      <div className="basket">
        <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"></img>
        <h3>Hello,{user?.email}</h3>

        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" nekt to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout-title">Your shopping Basket</h2>
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
        )}
      </div>
      <Subtotal />
    </div>
  );
};

export default Checkout;
