const mongoose=require("mongoose");

const CartSchema=mongoose.Schema({
    image:String,
    desc:String,
    additional:String,
    price:String
});

const CartModel=mongoose.model("Cart",CartSchema);

module.exports={
    CartModel
}