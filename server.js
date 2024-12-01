import express from 'express';
import dotenv from 'dotenv'
import connectdb from './config/db.js';
import morgan from 'morgan';

//rest object

dotenv.config()
//our env file in the root folder that why we do not pass path to the config obj
connectdb();
const app = express();
app.use(morgan('dev'));
// The morgan middleware is used to log HTTP requests handled by your ExpressJS application.
app.use(express.json())// it handle json data

// rest api

app.get('/',(req,res)=>{
    res.send({
        message:'welcome to ecommerse app'
    })
})

//port
const PORT= process.env.PORT

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})