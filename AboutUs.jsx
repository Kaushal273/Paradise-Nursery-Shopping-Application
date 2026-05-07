// src/pages/AboutUs.jsx

import React from "react";

const AboutUs = () => {
  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "1000px",
        margin: "0 auto",
        lineHeight: "1.8",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#2e7d32",
        }}
      >
        About Paradise Nursery
      </h1>

      <p>
        Welcome to <strong>Paradise Nursery</strong>, your trusted destination
        for beautiful and healthy plants. We are passionate about bringing
        nature closer to people by offering a wide variety of indoor and outdoor
        plants that brighten homes, offices, and gardens.
      </p>

      <p>
        Founded with a vision to promote greenery and sustainable living,
        Paradise Nursery focuses on providing high-quality plants along with a
        smooth and enjoyable shopping experience. Whether you are a beginner
        plant lover or an experienced gardener, we have something for everyone.
      </p>

      <p>
        Our collection includes decorative plants, air-purifying plants,
        flowering plants, succulents, and gardening essentials carefully chosen
        to suit different environments and lifestyles.
      </p>

      <p>
        At Paradise Nursery, customer satisfaction and plant care are our top
        priorities. We believe plants not only enhance spaces but also improve
        mental well-being and create a healthier environment.
      </p>

      <p>
        Thank you for choosing Paradise Nursery. Let’s grow a greener world
        together!
      </p>

      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          backgroundColor: "#f1f8f4",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ color: "#388e3c" }}>Why Choose Us?</h2>

        <ul>
          <li>Wide variety of healthy plants</li>
          <li>Affordable prices</li>
          <li>Eco-friendly approach</li>
          <li>Easy online shopping experience</li>
          <li>Customer-focused service</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
