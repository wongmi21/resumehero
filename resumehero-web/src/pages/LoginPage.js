import React from 'react';
import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import request from 'superagent';

export default class LoginPage extends React.Component {

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
            .post('/login')
            .send({
                username: this.state.username,
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
            <Grid>
                <Row>
                    <Col>
                        <h3>Log In</h3>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form horizontal onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Col md={4} componentClass={ControlLabel}>
                                    Username
                                </Col>
                                <Col md={4}>
                                    <FormControl placeholder="Username" required="true" value={this.state.username} onChange={this.handleChange.bind(this, 'username')} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={4} componentClass={ControlLabel}>
                                    Password
                                </Col>
                                <Col md={4}>
                                    <FormControl placeholder="Password" type="password" required="true" value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={4} mdOffset={4}>
                                    <Button bsStyle="primary" type="submit">
                                        Log In
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

LoginPage.contextTypes = {
    user: React.PropTypes.object,
    changeUser: React.PropTypes.func
};