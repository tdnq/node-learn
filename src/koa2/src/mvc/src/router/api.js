module.exports=async (ctx)=>{
    ctx.set("Content-Type","application/json");
    ctx.response.body=JSON.stringify({"mes":"good","num":1});
}