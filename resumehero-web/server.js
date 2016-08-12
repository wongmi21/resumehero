var mongoose = require('mongoose');
var app = require('express')();
var webpack = require('webpack');
var config = require('./webpack.config');
var compiler = webpack(config);
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

mongoose.connect('mongodb://localhost:27017/resumehero');

var userSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: String,
    phonenumber: String,
    resume: {},
    coverletter: String
});

var User = mongoose.model('User', userSchema);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(bodyParser.json());

app.post('/register', function(req, res) {
    var user = new User({
        email: req.body.email,
        password: req.body.password
    });
    user.save(function(err) {
        if (err) {
            res.status(400);
        }
        res.end();
    });
});

app.post('/login', function(req, res) {
    User.findOne({ email: req.body.email, password: req.body.password }, function (err, user) {
        if (user) {
            res.json(user);
        } else {
            res.status(400);
        }
        res.end();
    })
});

app.post('/profile', upload.any(), function(req, res) {
    User.findOne({ email: req.body.email }, function (err, user) {
        if (user) {
            user.name = req.body.name;
            user.phonenumber = req.body.phonenumber;
            user.resume = req.files[0];
            user.coverletter = req.body.coverletter;
            user.save(function(err) {
                if (err) {
                    res.status(400);
                }
                res.end();
            });
        } else {
            res.status(400);
            res.end();
        }
    });
});

app.get('/user', function(req, res) {
    User.findOne({ email: req.query.email }, function (err, user) {
        if (user) {
            res.json({
                name: user.name,
                phonenumber: user.phonenumber,
                email: user.email,
                resume_filename: user.resume ? user.resume.originalname : null,
                coverletter: user.coverletter
            });
        } else {
            res.status(400);
        }
        res.end();
    });
});

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/build/index.html');
});

app.listen(3000, 'localhost', function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:3000');
});