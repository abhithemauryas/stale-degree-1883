const express=require("express");
const app=express();
const {connection}=require("./config/db")
require('dotenv').config()
const cors=require("cors");
const { productRoute}=require("./router/product");
const {  UserRouter}=require("./router/user")
app.use(cors());
app.use(express.json())

app.use(UserRouter);
app.use(productRoute);



app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("db is connected");
    } catch (error) {
        console.log(error);
        console.log("db is not connected");
    }
    console.log(`http://localhost:${process.env.port}`);
})