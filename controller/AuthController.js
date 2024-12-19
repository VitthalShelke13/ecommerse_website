
import { hashpassword ,commparepassword} from '../helper/AuthHepler.js';
import userModel from '../models/userModel.js'
import JWT from 'jsonwebtoken'

export const RegisterController=async(req,res)=>{
try{
  const{name,email,password,phone,address}= req.body;
  if(!name){
    return res.send({error:'name is Required'})
  }
  if(!email){
    return res.send({error:'email is Required'})
  }
  if(!password){
    return res.send({error:'password is Required'})
  }
  if(!phone){
    return res.send({error:'phone is Required'})
  }
  if(!address){
    return res.send({error:'address is Required'})
  }
//existing user
const existinguser = await userModel.findOne({email})
if(existinguser){
  return res.status(200).send({
    success:false,
    message:'User is alreday register please login',
   error
  })
  

}
//register user
const hash = await hashpassword(password)
//save
const user = new userModel({name,email,password:hash,phone,address}).save()
res.status(200).send({
  success:true,
  message:'user register succefully',
  user
})
}catch(error){
  console.log(error)
    res.status(500).send({
        success:false,
        message:'error in Registration',
        error
    })
}
}


// login user

// export const Loginuser = async(req,res)=>{
//   try{
//     const {email,password}=req.body;

//     if(!email || !password){
//      return res.status(404).send({
//         success:false,
//         message:'email or password is not valid',
      
//       });
//     }
//     const finduser=await user.findOne({email})
//     if(!finduser){
//       return res.status(200).send({
//         success:true,
//         message:"email is not match"
//       });
//     }
//     const match = await commparepassword(password,finduser.password)
//     if(!match){
//       return res.status(200).send({
//         success:true,
//         message:"password is not match"
//       });
//     }
//  const JWTTOKEN = JWT.sign({id:finduser._id},process.env.SECRET_KEY,{expiresIn:'7d'});
//  console.log(JWTTOKEN)
//  return res.status(200).send({
//   success:true,
//   message:'user login successfully',
//   user:{
//     name:user.name,
//     email:user.email,
//     phone:user.phone,
//     address:user.address,
//     role:user.role
//   },JWTTOKEN
//  })
//   }catch(error){
//     res.status(500).send({
//       success:false,
//       message:'user creditional not match',
//       error
//     })
//   }
// }

//login user
export const Loginuser = async(req,res)=>{
  try{
      const {email,password}= req.body;
      
      if(!email || !password){
          return res.status(404).send({
              success:false,
              message:"Invalid email or password",
              error
          });
         
      }
      const user =await userModel.findOne({email})
      if(!user){
      return res.status(200).send({
          success:false,
          message:'email not register'
      });
     
      }
      const Match =await commparepassword(password,user.password)
      if(!Match){
      return res.status(200).send({
          success:false,
          message:'paasword not match'
      }) 
  }
  const jwttoken=  JWT.sign({id:user._id},process.env.SECRET_KEY,{expiresIn:'7d'});
  console.log(jwttoken)
  res.status(200).send({
      success:true,
      message:'successfully login',
      user:{
          name:user.name,
          email:user.email,
          phone:user.phone,
          address:user.address,
          role: user.role
      },jwttoken
      
  
  })
  }catch
      (error){
          console.log(error)
           res.status(500).send({
              success:false,
              message:"error in login"
               
          })
  }
  }