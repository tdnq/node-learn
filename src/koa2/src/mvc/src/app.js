const koaStatic = require("koa-static");
const koaViews = require("koa-views");
const koa = require("koa");
const app = new koa();
const router = require('./router/index.js');

//视图模板
app.use(koaViews(`${__dirname}/views`, { extension: "pug" }));

//路由
app.use(router);

app.listen(3000, "localhost", () => {
    console.log("server start at http://localhost:3000");
});