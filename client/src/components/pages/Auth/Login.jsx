
import Layout from '../../layouts/Layout'
import React, { useState, } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import '../../../styles/Authstyles.css'

const Login = () => {
   
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
 
  const navigate = useNavigate()
 const submitHandler=async(e)=>{
e.preventDefault()
console.log(email,password)
const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,
  {email,password});
try{
if(res.data.success){
  toast.success(res.data.message,'login successfully')
  //  navigate('/')
      setTimeout(() => {
      navigate('/');
    }, 1000)
  
}else{
  toast.error(res.data.message)
}
}catch(error){
  console.log(error)
}
 }
  return (
    <>
    <Layout>
      
      <div className="main-container">
         
      <form onSubmit={submitHandler} className='form-container'>
        <h4 className='form-title'>Login Page</h4>
      <div className="mb-3">
        <input type="email"  placeholder='email' className="form-control" required 
         value={email} onChange={(e)=>setemail(e.target.value)}/>
      </div>
      <div className="mb-3">
        <input type="password"  placeholder='password' className="form-control" required  
        value={password} onChange={(e)=>setpassword(e.target.value)}/>
      </div>
      <button type="submit" className="btn btn-primary" >Submit</button>
    </form>
      </div> 
    </Layout>
    
    </>
  )
}

export default Login