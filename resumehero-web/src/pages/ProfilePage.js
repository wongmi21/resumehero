import React from 'react';
import request from 'superagent';

export default class ProfilePage extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            phonenumber: "",
            resume: {},
            resume_filename: "",
            coverletter: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        if(this.context.user === undefined) {
            this.componentDidMount = function () {
                return null;
            };
            this.render = function () {
                return null;
            };
        }
    }

    componentDidMount() {
        request
            .get('/user')
            .query({
                username: this.context.user.username,
                password: this.context.user.password
            })
            .end(function(err, res) {
                if (res.ok) {
                    this.setState({
                        name: res.body.user.name,
                        email: res.body.user.email,
                        phonenumber: res.body.user.phonenumber,
                        resume_filename: res.body.user.resume ? res.body.user.resume.originalname : null,
                        coverletter: res.body.user.coverletter
                    });
                }
            }.bind(this));
    }

    handleSubmit(e) {
        e.preventDefault();

        var fd = new FormData();
        fd.append('username', this.context.user.username);
        fd.append('password', this.context.user.password);
        fd.append('name', this.state.name);
        fd.append('email', this.state.email);
        fd.append('resume', this.state.resume);
        fd.append('phonenumber', this.state.phonenumber);
        fd.append('coverletter', this.state.coverletter);

        request
            .post('/profile')
            .send(fd)
            .end(function(err, res) {
                if (res.ok) {
                    alert('Profile updated');
                } else {
                    alert('Update profile failed');
                }
            });
    }

    handleChange(field, e) {
        var change = {};
        change[field] = e.target.value;
        this.setState(change);
    }

    changeResume(e) {
        var str = e.target.value;
        var n = str.lastIndexOf('\\');
        var result = str.substring(n + 1);
        this.setState({resume_filename: result});

        var files = e.target.files;
        this.setState({resume: files[0]});
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h3>Update Profile</h3>
                        <hr />
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="form-horizontal">
                                <div className="form-group">
                                    <label className="col-xs-12 col-sm-4 control-label">Name</label>
                                    <div className="col-xs-12 col-sm-4">
                                        <input className="form-control" placeholder="Name" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} required="true"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-xs-12 col-sm-4 control-label">Email</label>
                                    <div className="col-xs-12 col-sm-4">
                                        <input className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} required="true"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-xs-12 col-sm-4 control-label">Phone Number</label>
                                    <div className="col-xs-12 col-sm-4">
                                        <input className="form-control" placeholder="Phone Number" value={this.state.phonenumber} onChange={this.handleChange.bind(this, 'phonenumber')} required="true"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-xs-12 col-sm-4 control-label">Resume</label>
                                    <div className="col-xs-12 col-sm-4">
                                        <label className="btn btn-default btn-file">
                                            Browse<input type="file" style={{display: 'none'}} onChange={this.changeResume.bind(this)}/>
                                        </label>
                                        <span id="resume_filename" className="control-label pull-right">{this.state.resume_filename}</span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-xs-12 col-sm-4 control-label">Cover Letter</label>
                                    <div className="col-xs-12 col-sm-4">
                                        <textarea className="form-control" value={this.state.coverletter} onChange={this.handleChange.bind(this, 'coverletter')} rows="10"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-offset-4 col-sm-4">
                                        <button type="submit" className="btn btn-primary">
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

ProfilePage.contextTypes = {
    user: React.PropTypes.object
};