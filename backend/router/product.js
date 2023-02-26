const express=require("express");
const productRoute=express.Router();
const {HairModel}=require("../models/hair.model")
const {MakeupModel}=require("../models/makeup.model");
const {CartModel}=require("../models/cart.model")
const {hair}=require("../Hair");
const {makeup}=require("../makeup")
productRoute.post("/hair/post",async(req,res)=>{
    try {
        let data=await HairModel.insertMany(hair);
       
        res.send({"msg":"hair data posted"})

    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"});
    }
});
productRoute.post("/makeup/post",async(req,res)=>{
    try {
        let data=await MakeupModel.insertMany(makeup);
        res.send({"msg":"makeup data posted"})
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"});
    }
});



productRoute.get("/hair/get",async(req,res)=>{
    try {
        let data=await HairModel.find();
        res.send({"msg":"makeup data posted"},data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"});
    }
});
productRoute.get("/makeup/get",async(req,res)=>{
    try {
        let data=await MakeupModel.find();

        res.send({"msg":"makeup data posted",data})
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"});
    }
});

productRoute.post("/cart/post",async(req,res)=>{
    try {
        let data=new CartModel(req.body.obj);
        res.send({"msg":"your data is addeed in cart",data})
        console.log(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"});
    }
});
productRoute.get("/cart/get",async(req,res)=>{
    try {
        let data=await  CartModel.find();
        res.send({"msg":"your data is addeed in cart",data})
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"});
    }
});

module.exports={
    productRoute
}