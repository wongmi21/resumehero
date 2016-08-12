import React from 'react';
import request from 'superagent';

export default class LoginPage extends React.Component {

    constructor() {
        super();
        this.state = {
            email: "",
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
            .post('/login')
            .send({
                email: this.state.email,
                password: this.state.password
            })
            .end(function (err, res) {
                if (res.ok) {
                    this.context.changeUser(res.body);
                    alert('Login complete');
                } else {
                    alert('Login failed');
                }
            }.bind(this));
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
                        <h3>Log In</h3>
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
                                            Log In
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

LoginPage.contextTypes = {
    user: React.PropTypes.object,
    changeUser: React.PropTypes.func
};