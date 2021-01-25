const mysql = require("mysql");

const config = {
    host: process.env.DB_CONNECTION_HOST,
    port: process.env.DB_CONNECTION_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
};

function getPoolConnection(){
    return poolConnection();
}

function poolConnection(){
    return mysql.createPool(config);
}

function getConnection() {
    return mysql.createConnection(config);
}
module.exports = {
    getConnection,
    getPoolConnection
}