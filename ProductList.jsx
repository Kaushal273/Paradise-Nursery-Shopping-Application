// src/pages/ProductList.jsx

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import "./ProductList.css";

const plantsData = [
  {
    id: 1,
    name: "Snake Plant",
    price: 20,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e8b4c",
  },
  {
    id: 2,
    name: "Aloe Vera",
    price: 15,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 25,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
  },

  {
    id: 4,
    name: "Rose Plant",
    price: 18,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
  },
  {
    id: 5,
    name: "Lavender",
    price: 22,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
  },
  {
    id: 6,
    name: "Hibiscus",
    price: 24,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
  },

  {
    id: 7,
    name: "Cactus",
    price: 12,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115",
  },
  {
    id: 8,
    name: "Jade Plant",
    price: 19,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
  },
  {
    id: 9,
    name: "Echeveria",
    price: 16,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1483794344563-d27a8d18014e",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  const isAddedToCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const groupedPlants = plantsData.reduce((groups, plant) => {
    if (!groups[plant.category]) {
      groups[plant.category] = [];
    }

    groups[plant.category].push(plant);

    return groups;
  }, {});

  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <div className="product-page">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Paradise Nursery</h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/plants">Plants</a>
          <a href="/cart" className="cart-link">
            🛒 Cart
            <span className="cart-count">{totalCartItems}</span>
          </a>
        </div>
      </nav>

      {/* Product Categories */}
      <div className="products-container">
        {Object.entries(groupedPlants).map(([category, plants]) => (
          <div key={category} className="category-section">
            <h2 className="category-title">{category}</h2>

            <div className="plants-grid">
              {plants.map((plant) => (
                <div className="plant-card" key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-image"
                  />

                  <h3>{plant.name}</h3>

                  <p className="price">${plant.price}</p>

                  <button
                    className={`cart-btn ${
                      isAddedToCart(plant.id) ? "disabled-btn" : ""
                    }`}
                    onClick={() => handleAddToCart(plant)}
                    disabled={isAddedToCart(plant.id)}
                  >
                    {isAddedToCart(plant.id) ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
