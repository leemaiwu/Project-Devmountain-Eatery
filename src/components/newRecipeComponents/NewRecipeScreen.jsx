import React, { useState } from "react"
import { Formik } from 'formik'

const NewRecipeScreen = () => {
  
  const [ingredients, setIngredients] = useState([])
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')

  const initialValues = {
    type: '',
    recipeName: '',
    imageURL: '',
    prepTime: '',
    cookTime: '',
    serves: '',
    ingredients: [],
    instructions: ''
  }

  const ingredientList = ingredients.map((element => {
    return (
      <li>
        {element.quantity} {element.name}
      </li>
    )
  }))

  return (
    <section className="form">
      <h1 className='add-title'>Tell us about your Recipe!</h1>
      <Formik>
        <form>
          <div className='add-input'>
            <input type='text' placeholder='Name' className='input-one' />
            <input type='text' placeholder='Image URL' className='input-one' />
          </div>
          <div className='radio-input'>
            <div className='radio-card'>
              <input type='radio' value='Cook' name='type' className='input-two' />
              <h3>Cook</h3>
            </div>
            <div className='radio-card'>
              <input type='radio' value='Bake' name='type' className='input-two' />
              <h3>Bake</h3>
            </div>
            <div className='radio-card'>
              <input type='radio' value='Drink' name='type' className='input-two' />
              <h3>Drink</h3>
          </div>
          </div>
          <div className='add-input-three'>
            <input type='text' placeholder='Prep Time' className='input-three' />
            <input type='text' placeholder='Cook Time' className='input-three' />
            <input type='text' placeholder='Serves' className='input-three' />
          </div>
          <div className='add-input-four-container'>
            <div className='add-input-four'>
              <input type='text' placeholder='Ingredient' className='input-four' onChange={(event) => setName(event.target.value)} />
              <input type='text' placeholder='Quantity' className='input-four'  onChange={(event) => setQuantity(event.target.value)} />
            </div>
            <ul>{ingredientList}</ul>
          </div>
          <div className='btn-container'>
            <button className='add-btn'>
              Add Another
            </button>
          </div>
          <div className='text-box-container'>
            <textarea className="text-box" placeholder="What are the instructions?" />
          </div>
          <div className="save-container">
            <button className='save-btn'>
              Save
            </button>
          </div>
        </form>
      </Formik>
    </section>
  )
}

export default NewRecipeScreen
