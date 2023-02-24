import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-around',backgroundColor:'black',marginBottom:'20px'}}>
     
        <div style={{color:'red'}}><h3>Recipes</h3></div>
        <div style={{marginTop:'15px'}} ><Link style={{color:'white'}} to={'/'}>Home</Link></div>
        <div style={{marginTop:'15px'}} ><Link style={{color:'white'}} to={'/login'}>Log In</Link></div>
        <div style={{marginTop:'15px'}} ><Link style={{color:'white'}} to={'/register'}>Sign In</Link></div>

    </div>
  )
}

export default Navbar