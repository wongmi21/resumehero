import React from 'react';
import { Button } from 'react-bootstrap';
import request from 'superagent';

export default class ApplyButton extends React.Component {

    constructor() {
        super();
        this.state = {
            jobKey: "",
            status: ""
        }
    }

    handleApply() {
        this.setState({ status: "applying" }, function () {
            request
                .post('/application')
                .send({
                    key: this.context.user.username + this.props.jobKey,
                    username: this.context.user.username,
                    jobKey: this.props.jobKey,
                    status: this.state.status
                })
                .end(function() {
                    request
                        .get('http://192.168.1.4:8080/apply')
                        .query({
                            key: this.context.user.username + this.props.jobKey
                        })
                        .end(function (err, res) {
                            if (err) {
                                this.setState({ status: "" });
                            } else if (res.ok) {
                                this.setState({ status: "applied" });
                            } else {
                                this.setState({ status: "" });
                            }
                        }.bind(this));
                }.bind(this));
        });
    }

    render() {
        if (this.state.jobKey !== this.props.jobKey) {
            request
                .get('/application')
                .query({ key: this.context.user.username + this.props.jobKey })
                .end(function (err, res) {
                    if (res.ok) {
                        if (res.body) {
                            this.setState({
                                jobKey: res.body.application.jobKey,
                                status: res.body.application.status
                            });
                        } else {
                            this.setState({
                                jobKey: this.props.jobKey,
                                status: ""
                            });
                        }
                    } else {
                        this.setState({
                            jobKey: this.props.jobKey,
                            status: ""
                        });
                    }
                }.bind(this));
        }
        switch(this.state.status) {
            case "":
                return <Button onClick={this.handleApply.bind(this)}>Apply</Button>;
            case "applying":
                return <Button disabled bsStyle="primary">Applying...</Button>;
            case "applied":
                return <Button disabled bsStyle="success">Applied</Button>;
        }
    }
}

ApplyButton.contextTypes = {
    user: React.PropTypes.object
};