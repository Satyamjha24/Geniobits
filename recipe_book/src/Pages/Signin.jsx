import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom'
import Navbar from '../Components/Navbar';
import { signinSuccessAction } from '../Redux/AuthReducer/action';

const Signin = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const dispatch=useDispatch();
    const isSignin=useSelector((store)=>store.authReducer.signin)
 


    const handleSignin = async()=>{
        let userData={email,password}
        await axios.post('https://reqres.in/api/register',userData).then((res)=>{
        dispatch(signinSuccessAction(res.data.token))
       console.log(res.data.token);
       }).catch((err)=>{
       
        console.log(err);
       })
       
       setEmail('')
       setPassword('')
     };
    
     if(isSignin){
        alert('SignIn Successful')
        return <Navigate to={'/login'}/>
     }

  return (
    <div>
        <Navbar/>
        <div style={{backgroundColor:'teal',width:'40%',margin:'auto',padding:'20px 0px'}}>
        <h3>Register</h3>
        <label>Name</label><br/>
        <input style={{width:'70%',height:'30px',marginTop:'15px'}} type="text" /><br/>
        <label>Email</label><br/>
        <input style={{width:'70%',height:'30px',marginTop:'15px'}} type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
        <label>Password</label><br/>
        <input style={{width:'70%',height:'30px',marginTop:'15px'}} type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
        <button style={{height:'38px',width:'78px',marginTop:'15px'}}   onClick={handleSignin}>Register</button><br/>
        </div>
    </div>
  )
}  


export default Signin