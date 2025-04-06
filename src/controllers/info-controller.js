const {StatusCodes}=require("http-status-codes");

const info=(req,res)=>{
    return res.status(StatusCodes.OK).json({
        success:true,
        message:"Api working fine",
         error:{},
         data:{}
    });
}
module.exports={info};