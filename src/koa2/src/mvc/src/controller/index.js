const first = require("../model/index.js");
const {Op} = require("sequelize");

async function getAllFIrsts(){
    return first.findAll({
        attributes:["name","password"],
        order:[["name","DESC"]]
    });
}
module.exports=getAllFIrsts;