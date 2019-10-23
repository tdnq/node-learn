const koa = require("koa");
const app = new koa();
app.use(async (ctx, next) => {
    let startTime = Date.now();
    await next();
    let eTime = Date.now()
    console.log("cost time", eTime - startTime);
    ctx.response.body=ctx.method;
});
app.use(async (ctx, next) => {
    let endTime = Date.now();
    await next();
})

app.listen(3000, "localhost", () => {
    console.log("server start at http://localhost:3000");
});