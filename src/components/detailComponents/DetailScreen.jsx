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
      <div className='detail-container' style={{paddingTop: '30px'}}>
        <div className='detail-card'>
          <h1 className='detail-title'>Recipe</h1>
            <p className='detail-body'>Prep Time: {recipe.prep_time}</p>
            <p className='detail-body'>Cook Time: {recipe.cook_time}</p>
            <p className='detail-body'>Serves: {parseInt(recipe.serves)}</p>
          <h1 className='detail-title'>Ingredients</h1>
            {recipe.ingredients && recipe.ingredients.map((element, index) => {
              return <p key={index} className='detail-body'>{element.quantity} {element.ingredient}</p>
            })}
        </div>
        <div className='detail-card'>
          <h1 className='detail-title'>Instructions</h1>
            <p className='detail-instruction'>{recipe.instructions}</p>
        </div>
      </div>
    </section>
  )
}

export default DetailScreen;
