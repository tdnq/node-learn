const Sequelize = require("sequelize");
const sequelize = new Sequelize("koa","koa","koa",{
    host:"localhost",
    dialect: "mysql",
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const first=sequelize.define("first",{
    name:{
        type:Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    }
},
{
    freezeTableName:true
});
module.exports=first;

