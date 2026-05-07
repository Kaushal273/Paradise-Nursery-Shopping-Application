// src/App.jsx

import React, { useState } from "react";
import "./App.css";
import ProductList from "./pages/ProductList";

const App = () => {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  if (showProducts) {
    return <ProductList />;
  }

  return (
    <div className="landing-page">
      <div className="overlay">
        <div className="content">
          <h1 className="title">Paradise Nursery</h1>

          <p className="subtitle">Bring Nature Closer To Your Home</p>

          <button className="get-started-btn" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
