require("dotenv").config()

const Sequelize = require('sequelize')

const connection = new Sequelize(process.env.DB_NAME, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
})

module.exports = connection;