const scoreData = require("./mockScore.json");
const http = require("http");
const fs = require("fs");
const querystring = require("querystring");
const path = require("path");

http.createServer((req,res)=>{
    //读取查询页
    if(req.url.startsWith('/query') && req.method === "GET"){
        fs.readFile(path.join(__dirname,"query.html"),'utf8',(err,content)=>{
            if(err){
                res.writeHead(500,{'content-type':'text/plain;charset=utf8'});
                res.end("服务器错误");
            }
            res.end(content);
        });
    }
    //查询结果
    else if(req.url.startsWith('/result')&&req.method==="POST"){
        let rdata = '';
        req.on('data',(chunk)=>{
            console.log('chunk',Buffer.from(chunk).toString());
            rdata += chunk;
        });
        req.on('end',()=>{
            let obj = querystring.parse(rdata);
            let result = scoreData[obj.name];
            console.log('obj',JSON.stringify(obj));
            console.log('result',result);
            fs.readFile(path.join(__dirname,'result.html'),'utf8',(err,content)=>{
                if(err){
                    res.writeHead(500,{'content-type':'text/plain;charset=utf8'});
                    res.end("服务器错误");
                    
                }
                content = content.replace("${chinese}",result.chinese);
                content = content.replace("${math}",result.math);
                console.log('rda',rdata);
                res.end(content);
            });
        });
    }
}).listen(3000,()=>{
    console.log("running");
});
