import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getRecipeFailureAction, getRecipeRequestAction, getRecipeSuccessAction } from '../Redux/AppReducer/action';
import axios from 'axios'
import RecipeCard from './RecipeCard';
const RecipeList = () => {

    const APP_ID='f13f7b0f';
    const APP_KEY='da75f626fb4c61926414771c39da7838';
    const [search,setSearch]=useState('')
    const [query,setQuery]=useState('chicken')
    const dispatch=useDispatch();
    const recipe_Data=useSelector((store)=>store.appReducer.recipe_Data);

    const getRecipe= async()=>{
        dispatch(getRecipeRequestAction())
        await axios.get
        (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then((res)=>{
            dispatch(getRecipeSuccessAction(res.data.hits))
            console.log(res.data.hits);
        }).catch((err)=>{
            dispatch(getRecipeFailureAction())
        })
    };

    const handleSearch=()=>{
     setQuery(search)
     setSearch('')
    }

    useEffect(()=>{
      getRecipe()
    },[query]);

  return (
    <div>
        <div>
            <input style={{width:'40%',height:'30px'}} type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <button style={{height:'38px',width:'78px'}} onClick={handleSearch}>Search</button>
        </div><br />
        <h2>Recipe List</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'20px'}} >
        {recipe_Data.length>0 && recipe_Data.map((el,i)=>{
           
            return <RecipeCard key={i} id={i}image={el.recipe.image} label={el.recipe.label}/>
        })}
        </div>
    </div>
  )
}

export default RecipeList