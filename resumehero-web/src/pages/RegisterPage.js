import React from 'react';
import { Grid, Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import AlertPopup from '../components/AlertPopup';
import request from 'superagent';

export default class RegisterPage extends React.Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            registrationFailed: false,
            registrationComplete: false
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
                    this.setState({
                        registrationFailed: false,
                        registrationComplete: true
                    });
                } else {
                    this.setState({
                        registrationFailed: true,
                        registrationComplete: false
                    });
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
                <h3>Register</h3>
                <hr />
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
                            <AlertPopup visible={this.state.registrationFailed} bsStyle="danger">Registration failed. Account already exists.</AlertPopup>
                            <AlertPopup visible={this.state.registrationComplete} bsStyle="success">Registration complete</AlertPopup>
                            <Button bsStyle="primary" type="submit">
                                Register
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Grid>
        );
    }
}

RegisterPage.contextTypes = {
    user: React.PropTypes.object
};