const koa = require("koa");
const koaRouter = require("koa-router");
const bodyparser = require("koa-bodyparser");
const app = new koa();
const router = new koaRouter();
app.use(bodyparser());
router.get("/home", async (ctx,next)=>{
    ctx.response.body=`<form method=\"POST\" action=\"http://localhost:3000/user\">
    
    <input name="username"> <button type="submit">fafa</button>
    </form>`
});
router.post("/user",async (ctx)=>{
    console.log(ctx.request.body);
    ctx.response.body=ctx.request.body;

    
});

app.use(router.routes());
app.listen(3000, "localhost", () => {
    console.log("server start at http://localhost:3000");
});