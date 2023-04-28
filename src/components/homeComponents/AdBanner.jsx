import React from "react";
import salmon from "../../assets/salmon.jpeg";
import { Link } from "react-router-dom";

const AdBanner = () => {
  return (
    <div
      className="banner-container"
      style={{
        backgroundImage: `linear-gradient(280deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${salmon})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        height: "300px",
      }}
    >
      <div className="banner">
        <h3>New Recipe</h3>
        <h1 className="recipe-title">Pineapple Salmon</h1>
        <h3 className="recipe-body">
          This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
          brown sugar rub, baked for 25 minutes on a bed of pineapple, and
          garnished in butter, garlic, and chives. You won’t want to miss it!
        </h3>
        <Link to="/recipes/3">
          <button className="blue-btn">Check it out</button>
        </Link>
      </div>
    </div>
  );
};

export default AdBanner;
