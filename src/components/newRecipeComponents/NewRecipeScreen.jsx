import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addingIngredient = (e) => {
    e.preventDefault();
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = (value) => {
    value.ingredients = ingredients;

    axios
      .post(`https://recipes.devmountain.com/recipes`, value)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ingredientList = ingredients.map((element, index) => {
    return (
      <li
        key={index}
        onClick={() => removeIngredient(index)}
        style={{ cursor: "pointer" }}
      >
        {element.quantity} {element.name}
      </li>
    );
  });

  const removeIngredient = (index) => {
    setIngredients(ingredients.filter((e, i) => i !== index));
  };

  return (
    <section className="form">
      <h1 className="add-title">Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="add-input">
              <input
                type="text"
                placeholder="Name"
                value={values.recipeName}
                onChange={handleChange}
                name="recipeName"
                className="input-one"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={values.imageURL}
                onChange={handleChange}
                name="imageURL"
                className="input-one"
              />
            </div>
            <div className="radio-input">
              <div className="radio-card">
                <input
                  type="radio"
                  value="Cook"
                  onChange={handleChange}
                  name="type"
                  className="input-two"
                />
                <h3>Cook</h3>
              </div>
              <div className="radio-card">
                <input
                  type="radio"
                  value="Bake"
                  onChange={handleChange}
                  name="type"
                  className="input-two"
                />
                <h3>Bake</h3>
              </div>
              <div className="radio-card">
                <input
                  type="radio"
                  value="Drink"
                  onChange={handleChange}
                  name="type"
                  className="input-two"
                />
                <h3>Drink</h3>
              </div>
            </div>
            <div className="add-input-three">
              <input
                type="text"
                placeholder="Prep Time"
                value={values.prepTime}
                onChange={handleChange}
                name="prepTime"
                className="input-three"
              />
              <input
                type="text"
                placeholder="Cook Time"
                value={values.cookTime}
                onChange={handleChange}
                name="cookTime"
                className="input-three"
              />
              <input
                type="text"
                placeholder="Serves"
                value={values.serves}
                onChange={handleChange}
                name="serves"
                className="input-three"
              />
            </div>
            <div className="add-input-four-container">
              <div className="add-input-four">
                <input
                  type="text"
                  placeholder="Ingredient"
                  className="input-four"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <input
                  type="text"
                  placeholder="Quantity"
                  className="input-four"
                  value={quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                />
              </div>
              <div className="add-list">
                <ul>{ingredientList}</ul>
              </div>
            </div>
            <div className="btn-container">
              <button
                type="button"
                className="add-btn"
                onClick={addingIngredient}
              >
                Add Another
              </button>
            </div>
            <div className="text-box-container">
              <textarea
                className="text-box"
                placeholder="What are the instructions?"
                value={values.instructions}
                onChange={handleChange}
                name="instructions"
              />
            </div>
            <div className="save-container">
              <button type="submit" className="save-btn">
                Save
              </button>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
