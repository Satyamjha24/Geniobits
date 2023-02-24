import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom'
import Navbar from '../Components/Navbar';
import { loginFailureAction, loginRequestAction, loginSuccessAction } from '../Redux/AuthReducer/action';

const Login = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const dispatch=useDispatch();
    const isAuth=useSelector((store)=>store.authReducer.isAuth)


    const handleLogin = ()=>{
        let userData={email,password}
        dispatch(loginRequestAction());
         axios.post('https://reqres.in/api/login',userData).then((res)=>{
        dispatch(loginSuccessAction(res.data.token)).then(()=>{
          alert('Login Susscessful')
          
        })
       
       }).catch((err)=>{
        dispatch(loginFailureAction())
       })
       
       setEmail('')
       setPassword('')
       
     };
     if(isAuth){
      alert('Loging in Successful')
      return <Navigate to={'/'}/>
     }

  return (
    
    <div>
        <Navbar/>
        <div style={{backgroundColor:'teal',width:'40%',margin:'auto',padding:'20px 0px'}}>
        <h2>Login</h2>
        <label>Email</label><br/>
        <input style={{width:'70%',height:'30px',marginTop:'15px'}}  type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
        <label>Password</label><br/>
        <input style={{width:'70%',height:'30px',marginTop:'15px'}}  type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
        <button style={{height:'38px',width:'78px',marginTop:'15px'}} onClick={handleLogin}>Login</button><br/>
        </div>
    </div>
  )
}

export default Login