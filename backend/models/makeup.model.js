const mongoose=require("mongoose");

const MakeupSchema=mongoose.Schema({
    image:String,
    desc:String,
    additional:String,
    price:String
});

const MakeupModel=mongoose.model("makeup",MakeupSchema);

module.exports={
    MakeupModel
}