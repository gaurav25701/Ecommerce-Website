import cors from 'cors';
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import path from 'path';
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';


// configure env
dotenv.config();


// connecting database
connectDB();


// rest object to create API's
const app = express();


// middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname , './client/build')))

// routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);


// creating rest api

app.use('*' , function(){
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})



app.listen(8080 , function() {
    console.log('Server is running at port 8080');
})