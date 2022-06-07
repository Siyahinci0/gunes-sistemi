var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
const cors = require("cors");
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var corsOptions = {
    origin: "http://127.0.0.1:5500"
  };
  app.use(cors(corsOptions));
  // parse requests of content-type - application/json
  
  
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
// connection configurations
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'gunes-sistemi',
    port: 3306,
    password: 'Hasanmutlu12?',
    database: 'gunessistemi'
});
  
// connect to database
dbConn.connect(); 
 
 
// Retrieve all users 
app.get('/gezegenler', function (req, res) {

    dbConn.query('SELECT gezegenAdi, id FROM gezegenler', function (error, results, fields) {
        if (error) 
        {
             throw error;
        }

        req.header("Access-Control-Allow-Origin", "*");
        req.header("Access-Control-Allow-Headers", "X-Requested-With");
        req.header('Content-Type', 'application/json');
        req.json = true;
        
        console.log("cagrildi...");
        console.log(results);

        return res.send(results);
    });
});
 
 
// Retrieve user with id 
app.get('/gezegen/:id', function (req, res) {
  
    let gezegenId = req.params.id;
  
    if (!gezegenId) {
        return res.status(400).send({ error: true, message: 'Please provide gezgenId' });
    }
  
    dbConn.query('SELECT * FROM gezegenler WHERE id=?', gezegenId, function (error, result, fields) {
        if (error) throw error;

        return res.send(result[0]);
    });
  
}); 

// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
 
module.exports = app;
