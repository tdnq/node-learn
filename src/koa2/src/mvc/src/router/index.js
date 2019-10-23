const koaRouter = require("koa-router");
const router = new koaRouter();
const home = require("./home.js");
const api = require("./api.js");
router.get("/",home);
router.get("/api",api);
module.exports=router.routes();
