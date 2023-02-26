require('dotenv').config();
const jwt=require("jsonwebtoken")
const authentication=async(req,res,next)=>{
    let token=req.headers.authorization;
    if(token){
            let decoded=jwt.verify(token,process.env.token_secret);
            if(decoded){
                console.log(decoded);
                console.log(decoded.dataid);
                req.body.userID=decoded.dataid
                req.body.email=decoded.email
                next()
            }
    }else{
        res.send({"msg":"login again"})
    }
};
module.exports={
    authentication,

};

// 