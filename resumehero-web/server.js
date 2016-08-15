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
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: String,
    email: String,
    phonenumber: String,
    resume: {},
    coverletter: String
});

var User = mongoose.model('User', userSchema);

var jobSchema = mongoose.Schema({
    _id: {type: String, required: true, unique: true},
    _class: String,
    title: String,
    company: String,
    location: String,
    snippet: String,
    indeedApply: Boolean
});

var Job = mongoose.model('Job', jobSchema);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(bodyParser.json());

app.post('/register', function(req, res) {
    var user = new User({
        username: req.body.username,
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
    User.findOne({ username: req.body.username, password: req.body.password }, function (err, user) {
        if (user) {
            res.json(user);
        } else {
            res.status(400);
        }
        res.end();
    })
});

app.post('/profile', upload.any(), function(req, res) {
    User.findOne({ username: req.body.username, password: req.body.password }, function (err, user) {
        if (user) {
            user.name = req.body.name;
            user.email = req.body.email;
            user.phonenumber = req.body.phonenumber;
            if (req.files[0] !== undefined) {
                user.resume = req.files[0];
            }
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
    User.findOne({ username: req.query.username, password: req.query.password }, function (err, user) {
        if (user) {
            res.json({
                user: user
            });
        } else {
            res.status(400);
        }
        res.end();
    });
});

app.get('/jobs', function(req, res) {
    Job.find({ title: new RegExp(req.query.q, 'i'), indeedApply: true }, function (err, jobs) {
        if (jobs) {
            res.json({
                jobs: jobs
            });
        } else {
            res.status(400);
        }
        res.end();
    }).limit(10);
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