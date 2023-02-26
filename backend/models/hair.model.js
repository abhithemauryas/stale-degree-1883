const mongoose=require("mongoose");

const hairSchema=mongoose.Schema({
    image:String,
    desc:String,
    additional:String,
    price:String
});

const HairModel=mongoose.model("hair",hairSchema);

module.exports={
    HairModel
}