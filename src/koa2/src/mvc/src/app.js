const koaStatic = require("koa-static");
const koaViews = require("koa-views");
const koa = require("koa");
const router = require('./router/index.js');
const apiCatchError = require("./middleware/apiCatchError");
const app = new koa();
//视图模板
app.use(koaViews(`${__dirname}/views`, { extension: "pug" }));

//捕捉异常
app.use(apiCatchError);
//路由
app.use(router);

app.listen(3000, "localhost", () => {
    console.log("server start at http://localhost:3000");
});
module.exports=app;