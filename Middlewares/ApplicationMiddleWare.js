const ApplicationMiddleware=(req,res,next)=>{
    console.log("Inside applicationMiddleware");
    next();
}
module.exports=ApplicationMiddleware