import React from "react";
import { IoMdBasket } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvide";
import { auth } from "./firebase";
import "./style.css"
function Navbar() {
  const [{ basket, user }] = useStateValue();
  const login = () => {
    auth.signOut();
  };
  return (
    <div className="navbar">
      <Link to="/">
        <img
          className="header-logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        ></img>
      </Link>
      <div className="search-area">
        <input className="search-Input"></input>

        <AiOutlineSearch className="search-icon"></AiOutlineSearch>
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div onClick={login} className="sign-area">
            <p>Hello {user?.email}</p>
            <h3>{user ? "Sign Out" : "Sign in"}</h3>
          </div>
        </Link>

        <Link to="/">
          <div className="orders-area">
            <p>Returns</p>
            <h3>& Orders</h3>
          </div>
        </Link>

        <Link to="/">
          <div className="prime-area">
            <p>Your</p>
            <h3>Prime</h3>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="basket-area">
            <IoMdBasket className="basket-icon"></IoMdBasket>
            <span>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
