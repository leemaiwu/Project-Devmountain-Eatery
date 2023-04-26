import React from 'react'
import AdBanner from './AdBanner'
import { useEffect, useState } from 'react'
import axios from 'axios'
import RecipeCard from '../RecipeCard'

const HomeScreen = () => {

  const [recipes, setRecipes] = useState('')

  const getRecipes = () => {
    axios.get(`https://recipes.devmountain.com/recipes`)
    .then((res) => {
      setRecipes(res.data)
      console.table(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div>
        <AdBanner />
        <RecipeCard />
    </div>
  )
}

export default HomeScreen
