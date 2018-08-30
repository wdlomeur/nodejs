const mysql = require('mysql');

const connection = () => {
        return mysql.createConnection({
        host: 'localhost', 
        user: 'root', 
        password: '071107', 
        database: 'portal_noticias'
    });
};

module.exports =  () => connection ;

