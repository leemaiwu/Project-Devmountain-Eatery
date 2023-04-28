import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipes/${recipe.recipe_id}`);
    console.log(recipe.recipe_id);
  };

  return (
    <div className="card">
      <img style={{ height: "210px" }} alt="Recipe" src={recipe.image_url} />
      <h3 className="card-title">{recipe.recipe_name}</h3>
      <button className="card-btn" onClick={handleClick}>
        See More
      </button>
    </div>
  );
};

export default RecipeCard;
