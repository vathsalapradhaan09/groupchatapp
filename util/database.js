const Sequelize = require('sequelize')


const sequelize = new Sequelize('chatapp','root','Vathsalapm@152',{
    dialect: 'mysql',
    host: 'localhost'
    // process.env.DB_HOST
})

module.exports = sequelize;