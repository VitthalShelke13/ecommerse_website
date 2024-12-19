import bcrypt from 'bcrypt'

export const hashpassword = async(password)=>{
    try{
       const saltround = 10;
const hashedPassword = await bcrypt.hash(password,saltround);
return hashedPassword
    }catch(error){
        console.log(error)
    }
};

export const commparepassword =(password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword)
 }