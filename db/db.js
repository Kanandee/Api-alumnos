const config = require('../config/config.json');
const {sequelize} = require("sequelize");

const sequelize = new Sequelize(

    process.env.MYSQL_DATABASE || confing.development.database,
    process.env.MYSQL_USER || confing.development.username, 
    process.env.MYSQL_PASSWORD || confing.development.password, 
    {
     host: 'localhost',
    dialect: "mysql"
  });

  module.exports = sequelize.authenticate().then( (db)=>{
    console.log(`MYSQL connected to ${process.env.MYSQL_DATABASE || confing.development.database}`);
    console.log(process.env.USERNAME)
    return db;
  })