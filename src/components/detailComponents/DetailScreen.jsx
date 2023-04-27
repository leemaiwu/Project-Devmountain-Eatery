import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const DetailScreen = () => {  

  const { id } = useParams()
  const [recipe, setRecipe] = useState({})

  const recipeDetails = () => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`)
    .then((res) => {
      setRecipe(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    recipeDetails()
  }, [] )

  return (
    <section>
      <div className="banner-container"
        style={{
          backgroundImage: `linear-gradient(280deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${recipe.image_url})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          height: '300px',
        }}
      >
      <div className="banner">
        <h1 className="recipe-title">{recipe.recipe_name}</h1>
      </div>
      </div>
    </section>
  )
}

export default DetailScreen;
