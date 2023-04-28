import React from 'react'
import AdBanner from './AdBanner'
import { useEffect, useState } from 'react'
import axios from 'axios'
import RecipeCard from '../elements/RecipeCard'
import { BiSearchAlt2 } from 'react-icons/bi'

const HomeScreen = () => {

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')

  const searchHandler = (e) => setSearch(e.target.value.toLowerCase())

  const getRecipes = () => {
    axios.get(`https://recipes.devmountain.com/recipes`)
    .then((res) => {
      setRecipes(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const displaySearch = recipes
    .filter((element, index) => {
      let title = element.recipe_name.toLowerCase()
      let searchInput = search.toLowerCase()
      return title.includes(searchInput)
    })
    .map((element, index) => {
      return <RecipeCard key={index} recipe={element} />
    })

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div>
        <AdBanner />
        <span className='search-container' >
          <BiSearchAlt2 size='1.50em' color='#DA7635' />
          <input type='text' placeholder='Search for a Recipe' className='search-field' onChange={searchHandler} />
        </span>
        <div className='row-container'>
          {displaySearch ? displaySearch : <h2>No Recipes Found</h2>}
        </div>
    </div>
  )
}

export default HomeScreen
