import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Homepage from './Homepage'
import Login from './Login'
import Signin from './Signin'
import SingleProduct from './SingleProduct'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Signin/>}/>
            <Route path='/product/:id' element={<SingleProduct/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes