import JWT from 'jsonwebtoken'
import user from '../models/userModel.js';
//Token Base Protected Routes
export const RequireSignIn = async(req,res,next)=>{
try{
    const Signin = JWT.verify(req.headers.authorization,process.env.SECRET_KEY);
    req.user=Signin;
next();
}catch(error){
    console.log(error)
}
}

//for admin 
 export const Isadmin = async(req,res,next)=>{
    try{
const admin  = await user.findById(req.user.id)
if(admin.role !==1){
    res.status(401).send({
        success: false,
        message:'Unathorised access'
    })
}else{
    next()
}
    }catch(error){
        console.log(error)
        res.send('error in admin middleware')
    }
 }