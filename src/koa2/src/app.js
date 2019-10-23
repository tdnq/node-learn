const koa=require("koa");
const app = new koa();
app.use(async (ctx,next)=>{
    console.log(1);
    await next();
    console.log("1 end");
});
app.use(async (ctx,next)=>{
    console.log(2);
    await next();
    console.log("2 end");
});
app.use(async (ctx,next)=>{
    console.log(3);
    await next();
    console.log("3 end");
});

app.listen(3000,"localhost",()=>{
    console.log("server start at http://localhost:3000");
});