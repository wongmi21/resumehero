var mongoose = require('mongoose');
var app = require('express')();
var webpack = require('webpack');
var config = require('./webpack.config');
var compiler = webpack(config);
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({ dest: '/Users/michael/projects/resumehero/resumes' });
var mongoosePaginate = require('mongoose-paginate');

mongoose.connect('mongodb://localhost:27017/resumehero');

var userSchema = mongoose.Schema({
    username: {type: String, required: true, index: { unique: true }},
    password: {type: String, required: true},
    name: String,
    email: String,
    phonenumber: String,
    resume: {},
    coverletter: String
});
var User = mongoose.model('User', userSchema);

var jobSchema = mongoose.Schema({
    _id: {type: String, required: true, index: { unique: true }},
    title: String,
    company: String,
    location: String,
    snippet: String,
    indeedApply: Boolean
});
jobSchema.plugin(mongoosePaginate);
var Job = mongoose.model('Job', jobSchema);

var applicationSchema = mongoose.Schema({
    key: {type: String, required: true, index: { unique: true }},
    username: String,
    jobKey: String,
    status: String
});

var Application = mongoose.model('Application', applicationSchema);

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

app.get('/login', function(req, res) {
    User.findOne({ username: req.query.username, password: req.query.password }, function (err, user) {
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
    var regexClause = new RegExp(req.query.q, 'i');
    var query = { $or: [{ title: regexClause }, { company: regexClause }, { snippet: regexClause }], indeedApply: true };
    var pageSettings = { page: req.query.page, limit: 10 };
    Job.paginate(query, pageSettings, function(err, result) {
        if (result) {
            res.json({
                totalResults: result.total,
                jobs: result.docs
            });
        } else {
            res.status(400);
        }
        res.end();
    });
});

app.get('/application', function(req, res) {
    Application.findOne({ key: req.query.key }, function(err, application) {
        if (application) {
            res.json({
                application: application
            });
        }
        res.end();
    });
});

app.post('/application', function(req, res) {
    var application = new Application({
        key: req.body.key,
        username: req.body.username,
        jobKey: req.body.jobKey,
        status: req.body.status
    });
    application.save(function(err) {
        if (err) {
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

// app.listen(3000, '192.168.1.4', function (err) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('Listening at http://192.168.1.4:3000');
// });