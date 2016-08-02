var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var compiler = webpack(config);
var app = express();

MongoClient.connect("mongodb://localhost:27017/resumehero", function(err, db) {
    if(!err) {
        console.log("Established MongoDB connection");

        var users = db.collection('users');

        app.use(require('webpack-dev-middleware')(compiler, {
            noInfo: true,
            publicPath: config.output.publicPath
        }));

        app.use(bodyParser.urlencoded({
            extended: true
        }));

        app.use(bodyParser.json());

        app.post('/register', function(req, res) {

            function writeResponse(status, message) {
                res.status(status);
                res.write(message);
                res.end();
            }

            users.findOne({email: req.body.email}, function(err, doc) {
                if (doc != null) {
                    return writeResponse(400, 'Account already exists!');
                }
                users.insertOne(req.body);
                return writeResponse(200, 'Registration Complete.');
            });
        });

        app.post('/login', function(req, res) {

            function writeResponse(status, message) {
                res.status(status);
                res.write(message);
                res.end();
            }

            users.findOne({email: req.body.email}, function(err, doc) {
                if (doc != null) {
                    return writeResponse(200, 'Login Successful.');
                }
                return writeResponse(400, 'Login Failed!');
            });
        });

        app.get('*', function(req, res) {
            res.sendFile(__dirname + '/build/index.html')
        });

        app.listen(3000, 'localhost', function (err) {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Listening at http://localhost:3000');
        });
    } else {
        console.log(err);
    }
});