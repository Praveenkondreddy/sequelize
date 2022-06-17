const mysql=require("mysql2")
const { Sequelize } = require('sequelize');
 
 
const sequelize= new Sequelize('sequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

sequelize.authenticate().then(console.log("connected"))
  
module.exports=sequelize;
 


