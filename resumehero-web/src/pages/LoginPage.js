import React from 'react';
import $ from 'jquery';

var LoginForm = React.createClass({
    getInitialState: function() {
        return {
            email: "",
            password: ""
        }
    },

    handleSubmit: function(e) {
        e.preventDefault();

        $.ajax({
            type: "POST",
            url: "/login",
            data: {
                email: this.state.email,
                password: this.state.password
            },
            success: function(data) {
                alert(data);
            },
            error: function(xhr) {
                alert(xhr.responseText);
            }
        });
    },

    handleChange: function(field, e) {
        var change = {};
        change[field] = e.target.value;
        this.setState(change);
    },

    render: function () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="form-horizontal">
                            <div className="form-group">
                                <label htmlFor="email" className="col-xs-12 col-sm-4 control-label">Email</label>
                                <div className="col-xs-12 col-sm-4">
                                    <input className="form-control" id="email" placeholder="Email" required="true" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="col-xs-12 col-sm-4 control-label">Password</label>
                                <div className="col-xs-12 col-sm-4">
                                    <input className="form-control" id="password" placeholder="Password" type="password" required="true" value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-4 col-sm-4">
                                    <button type="submit" className="btn btn-primary">
                                        Log In
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
});

export default class LoginPage extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h3>Log In</h3>
                        <hr />
                    </div>
                </div>
                <LoginForm/>
            </div>
        );
    }
}