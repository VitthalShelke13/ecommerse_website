import mongoose from 'mongoose'
import dotenv from 'dotenv'

const connectdb=async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`database connection is successful ${conn.connection.host}`)
    }
    catch(error){
console.log(error)
    }
}

export default connectdb;