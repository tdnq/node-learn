const http = require("http");
const path = require("path");
const url = require("url");
const fs =require ("fs");

const isResponse=(reqPath)=>{
    console.log(reqPath);
    return reqPath.pathname.endsWith(".html")||reqPath.pathname.endsWith(".ico");
}
const server = http.createServer((req,res)=>{
    let reqPath = url.parse(req.url);
    // console.log(reqPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    if(isResponse(reqPath)){
        let tarHtml = path.join(__dirname,"view",path.parse(req.url).base);
        res.end(fs.readFileSync(tarHtml));
    }else{
        res.statusCode=404;
        res.end("<p>404</>");
    }
});
// 开启HTTP服务
const hostname = "localhost";
const port = 8001;
server.listen(port,hostname,()=>{
    console.log(`http server at ${hostname}:${port}`);
});