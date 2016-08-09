import React from 'react';
import $ from 'jquery';

export default class RegisterPage extends React.Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        $.ajax({
            type: "POST",
            url: "/register",
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
    }

    handleChange(field, e) {
        var change = {};
        change[field] = e.target.value;
        this.setState(change);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h3>Registration</h3>
                        <hr />
                    </div>
                </div>
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
                                            Register
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