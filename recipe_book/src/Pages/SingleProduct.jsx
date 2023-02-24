import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Navbar from '../Components/Navbar'

const SingleProduct = () => {

  const {id}=useParams()
  const products=useSelector((store)=>store.appReducer.recipe_Data);
  const [data,setData]=useState();

  useEffect(()=>{
    const productData = products.find((el,i)=> i== +id);

    productData && setData(productData);
    console.log(products);
  },[]);

  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default SingleProduct