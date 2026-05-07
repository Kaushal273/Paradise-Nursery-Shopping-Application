// src/pages/CartItem.jsx

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, deleteItem } from "../redux/CartSlice";
import "./CartItem.css";

const CartItem = () => {
  const dispatch = useDispatch();

  const { cartItems, totalAmount } = useSelector((state) => state.cart);

  const handleCheckout = () => {
    alert("Checkout coming soon!");
  };

  return (
    <div className="cart-page">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Paradise Nursery</h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/plants">Plants</a>
          <a href="/cart">Cart</a>
        </div>
      </nav>

      {/* Cart Section */}
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>

        <h2 className="total-amount">Total Cart Amount: ${totalAmount}</h2>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-card" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-image" />

                <div className="cart-details">
                  <h3>{item.name}</h3>

                  <p>Unit Price: ${item.price}</p>

                  <p>Quantity: {item.quantity}</p>

                  <p className="item-total">Total: ${item.totalPrice}</p>

                  <div className="quantity-buttons">
                    <button onClick={() => dispatch(removeFromCart(item.id))}>
                      -
                    </button>

                    <button onClick={() => dispatch(addToCart(item))}>+</button>
                  </div>

                  <button
                    className="delete-btn"
                    onClick={() => dispatch(deleteItem(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="cart-actions">
          <a href="/plants">
            <button className="continue-btn">Continue Shopping</button>
          </a>

          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
