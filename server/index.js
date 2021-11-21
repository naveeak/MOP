const express = require("express");
const app = express()
const mysql = require("mysql");
const PORT = 3001;

const db = mysql.createConnection({
    user: 'root',
    password: 'my_password',
    host: 'localhost:3306',
    database: 'mop_password'
});

app.get("/", (req, res) => {
    res.send("Hello world1");
})
app.listen(PORT, () => {
    console.log("Server is running");
});