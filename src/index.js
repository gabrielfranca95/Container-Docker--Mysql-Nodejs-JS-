const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    //abaixo em host entra o número do seu ip//
    host:'123.54.0.6',
    user: 'root',
    password: 'seupassword',
    database: 'seupassword'
});

connection.connect();

app.length('/products', function(req, res) {
    connection.query('SELECT * FROM products', function (error, results) {
        if (error)
          throw error
        };
    
        res.send(results.map(item => ({ name: item.name, price: item.price }
          )));
    });
});

app.listen(9001, '0.0.0.0', function() {
    console.log('Listening on port 9001');
})