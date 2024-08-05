import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoutes.js'
import { Book } from "./models/bookModel.js";
import cors from 'cors'

const app =express();
//Middleware for parsing request body
app.use(express.json());


//middleware for handling CORS policy
//option1: Allow All origins with default of cors(*)

app.use(cors())

//option 2: Allow custom origins

// app.use(
//     cors({
//         origin: 'https://localhost:3000',
//         methods:['GET','POST','PUT','DELETE'],
//         allowedHeaders: ['content-Type']
//     })
// )


app.get('/',(req,res)=>{
    return res.status(234).send("WELCOME HERE!")
});

app.use('/books',booksRoute);


mongoose.connect(mongoDBURL).then(() => {
    console.log('App connected to database')
    app.listen(PORT, ()=>{
        console.log(`Server is running on port: ${PORT}`);
    });
})
.catch((error)=>{
    console.log(error);
});