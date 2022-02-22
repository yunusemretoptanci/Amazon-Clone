import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import { useStateValue } from "./StateProvide";
import { auth } from "./firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./style.css"
import "regenerator-runtime/runtime";

const promise = loadStripe(
  "pk_test_51KVkqkCYzP0Sr2CE1dVDm2wk9FR7OTY8pAD0jriUVoITU2YK6huKeiIkzPNmevT51wJSje9RVQ4OhiwEJfACFILV000HXpEeDb"
);

function Main() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

function CheckOutPage() {
  return (
    <div>
      <Navbar></Navbar>
      <Checkout></Checkout>
    </div>
  );
}
function PaymentPage() {
  return (
    <div>
      <Navbar></Navbar>
      <Elements stripe={promise}>
        <Payment></Payment>
      </Elements>
    </div>
  );
}

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<CheckOutPage></CheckOutPage>} />
        <Route path="/payment" element={<PaymentPage></PaymentPage>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
