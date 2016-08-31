import React from 'react';
import { Alert } from 'react-bootstrap';

export default class AlertPopup extends React.Component {

    render() {
        if (this.props.visible) {
            return (
                <Alert bsStyle={this.props.bsStyle}>
                    {this.props.children}
                </Alert>
            );
        } else {
            return null;
        }
    }
}