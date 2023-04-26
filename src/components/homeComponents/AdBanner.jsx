import React from "react";
import salmon from "../../assets/salmon.jpg";
import { Link } from "react-router-dom";

const AdBanner = () => {
  return (
    <div className="banner-container"
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.7)),
          url(${salmon})`,
        backgroundSize: "cover",
        position: 'center',
        overflow: 'auto;',
        height: '300px',
      }}
    >
      <div className="banner">
        <h3>New Recipe</h3>
        <h1 className="recipe-title">Pineapple Salmon</h1>
        <h3 className="recipe-body">
          This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
          brown sugar rub, baked for 25 minutes on a bed of pineapple, and garnished in butter, garlic, and chives. You won’t want to miss it!
        </h3>
        <Link to="/recipe/3">
          <button className="blue-btn">Check it out</button>
        </Link>
      </div>
    </div>
  );
};

export default AdBanner;
