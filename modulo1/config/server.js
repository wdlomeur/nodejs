const express = require('express');
const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: '', 
    database: 'portal_noticias'
});

app.set('view engine', 'ejs');
app.set('views', './app/views');

module.exports = {
    "app": app,
    "conn": connection
};