const User = require("../data/entities/User");
//const utils = require('../data/utils/utils');
const connection = require('../data/utils/database').getPoolConnection();

function getUsersFromDatabase(){
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT first_name, last_name, email FROM users",
            (err, rows) => {
                err ? reject(err) : resolve(buildUsersArray(rows))
            });
    })
}

function buildUsersArray(dbRows) {
    const users = [];
    dbRows.forEach(row => {
        const user = new User(row.first_name, row.last_name, row.email);
        users.push(user);
    });
    return users;
}

module.exports = {
    getUsersFromDatabase
}