import React from 'react';
import request from 'superagent';

export default class RegisterPage extends React.Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        if(this.context.user !== undefined) {
            this.render = function () {
                return null;
            }
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        request
            .post('/register')
            .send({
                username: this.state.username,
                password: this.state.password
            })
            .end(function (err, res) {
                if (res.ok) {
                    alert('Registration complete');
                } else {
                    alert('Registration failed');
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
                                    <label htmlFor="username" className="col-xs-12 col-sm-4 control-label">Username</label>
                                    <div className="col-xs-12 col-sm-4">
                                        <input className="form-control" placeholder="Username" required="true" value={this.state.username} onChange={this.handleChange.bind(this, 'username')} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="col-xs-12 col-sm-4 control-label">Password</label>
                                    <div className="col-xs-12 col-sm-4">
                                        <input className="form-control" type="password" placeholder="Password" required="true" value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
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

RegisterPage.contextTypes = {
    user: React.PropTypes.object
};