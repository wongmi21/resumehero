import React from 'react';
import { Grid, Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
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
            <Grid>
                <h3>Update Profile</h3>
                <hr />
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Col md={4} componentClass={ControlLabel}>
                            Name
                        </Col>
                        <Col md={4}>
                            <FormControl placeholder="Name" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} required="true"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col md={4} componentClass={ControlLabel}>
                            Email
                        </Col>
                        <Col md={4}>
                            <FormControl placeholder="Email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} required="true"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col md={4} componentClass={ControlLabel}>
                            Phone Number
                        </Col>
                        <Col md={4}>
                            <FormControl placeholder="Phone Number" value={this.state.phonenumber} onChange={this.handleChange.bind(this, 'phonenumber')} required="true"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col md={4} componentClass={ControlLabel}>
                            Resume
                        </Col>
                        <Col md={4}>
                            <label className="btn btn-default btn-file">
                                Browse<FormControl type="file" style={{display: 'none'}} onChange={this.changeResume.bind(this)}/>
                            </label>
                            <span id="resume_filename" className="control-label pull-right">{this.state.resume_filename}</span>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col md={4} componentClass={ControlLabel}>
                            Cover Letter
                        </Col>
                        <Col md={4}>
                            <FormControl componentClass="textarea" rows="10" value={this.state.coverletter} onChange={this.handleChange.bind(this, 'coverletter')}/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col md={4} mdOffset={4}>
                            <Button bsStyle="primary" type="submit">
                                Update
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Grid>
        );
    }
}

ProfilePage.contextTypes = {
    user: React.PropTypes.object
};