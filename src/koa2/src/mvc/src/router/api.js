const getAllFIrsts = require("../controller/index.js");
module.exports=async (ctx)=>{
     const data=await getAllFIrsts();
    ctx.set("Content-Type","application/json");
    ctx.response.body=JSON.stringify(data);
}