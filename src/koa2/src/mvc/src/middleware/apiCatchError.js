
module.exports= async (ctx,next)=>{
    try{
        await next();
    }catch(err){
        ctx.response.type=jsonMIME;
        ctx.response.body={
            status:-1,
            message:err.message
        };
    }
}