import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({id,label, image, ingredients}) => {
  const [ingred, setIngred]=useState(false)

  const handleClick=()=>{
    setIngred(true)
  }
  return (
    <div>
        <img src={image} alt="logo" />
        <h3>{label}</h3>
        <Link to={`/product/${id}`}><button >Show Ingredients</button></Link>
  
    </div>
  )
}

export default RecipeCard