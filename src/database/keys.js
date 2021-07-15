require("dotenv").config();

const host = process.env.HOST;
const user = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DB;

module.exports = {
    database: {
        connectionLimit: 10,
        host: host,
        user: user,
        password: password,
        database: database,
    },
};
