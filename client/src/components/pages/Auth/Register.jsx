 import React, { useState, } from 'react'
import Layout from '../../layouts/Layout'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import '../../../styles/Authstyles.css'



 export const Register =()=>{
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [address,setaddress]=useState('')
  const [phone,setphone]=useState('')
  const navigate = useNavigate()
 const submitHandler=async(e)=>{
e.preventDefault()
console.log(name,email,password,address,phone)
const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,
  {name,email,password,address,phone});
try{
if(res.data.success){
  toast.success(res.data.message,'Register successfully')
  // navigate('/login')
    setTimeout(() => {
      navigate('/login');
    }, 2000)
}else{
  toast.error(res.data.message)
}
}catch(error){
  console.log(error)
}
 }
    return(
<>
<Layout title='Register- Ecomerse-app'>
 
  <div className="main-container">
  <form onSubmit={submitHandler} className='form-container'>
      <h4 className='form-title'>Register Page</h4>
  <div className="mb-3">
    <input type="text" className="form-control" aria-describedby="emailHelp"  
    placeholder='name' required value={name} onChange={(e)=>setname(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <input type="email" className="form-control" placeholder='email' required 
     value={email} onChange={(e)=>setemail(e.target.value)}/>
  </div>
  <div className="mb-3">
    <input type="password" className="form-control" placeholder='password' required  
    value={password} onChange={(e)=>setpassword(e.target.value)}/>
  </div>
  <div className="mb-3">
    <input type="text" className="form-control" placeholder='address' required 
    value={address}  onChange={(e)=>setaddress(e.target.value)}/>
  </div>
  <div className="mb-3">
    <input type="number" className="form-control" placeholder='mobile number' required 
    value={phone} onChange={(e)=>setphone(e.target.value)}/>
  </div>
 
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
  </div>
</Layout>
</>
    )
 };