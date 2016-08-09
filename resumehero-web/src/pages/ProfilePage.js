import React from 'react';
import $ from 'jquery';

export default class ProfilePage extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            resume: "",
            coverletter: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        if(this.context.user === undefined) {
            this.render = function () {
                return;
            }
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        $.ajax({
            type: "POST",
            url: "/profile",
            data: {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                resume: this.state.resume,
                coverletter: this.state.coverletter
            },
            success: function(data) {
                alert(data);
            },
            error: function(xhr) {
                alert(xhr.responseText);
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
        this.setState({resume: result});
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
                                    <label htmlFor="name"
                                           className="col-xs-12 col-sm-4 control-label">Name</label>
                                    <div className="col-xs-12 col-sm-4">
                                        <input className="form-control" id="name" name="name" placeholder="Name"
                                               value={this.state.name} onChange={this.handleChange.bind(this, 'name')} required="true"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="col-xs-12 col-sm-4 control-label">Email</label>
                                    <div className="col-xs-12 col-sm-4">
                                        <input className="form-control" id="email" name="email" placeholder="Email"
                                               value={this.state.email} onChange={this.handleChange.bind(this, 'email')} required="true"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="col-xs-12 col-sm-4 control-label">Password</label>
                                    <div className="col-xs-12 col-sm-4">
                                        <input className="form-control" id="password" name="password" placeholder="Password" type="password"
                                               value={this.state.password} onChange={this.handleChange.bind(this, 'password')} required="true"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="resume"
                                           className="col-xs-12 col-sm-4 control-label">Resume</label>
                                    <div className="col-xs-12 col-sm-4">
                                        <label className="btn btn-default btn-file">
                                            Browse<input key="resume" id="resume" name="resume"
                                                         type="file" style={{display: 'none'}}
                                                         onChange={this.changeResume}/>
                                        </label>
                                        <span id="resume_filename"
                                              className="control-label pull-right">{this.state.resume}</span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="coverletter"
                                           className="col-xs-12 col-sm-4 control-label">Cover
                                        Letter</label>
                                    <div className="col-xs-12 col-sm-4">
                                                <textarea className="form-control" id="coverletter" value={this.state.coverletter}
                                                          onChange={this.handleChange.bind(this, 'coverletter')} name="coverletter" rows="10"/>
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
    user: React.PropTypes.any
};