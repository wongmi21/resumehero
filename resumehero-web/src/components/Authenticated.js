import React from 'react';

export default class Authenticated extends React.Component {

    render() {
        var user = this.context.user;
        var authenticated = user !== undefined;

        return authenticated ? this.props.children : null;
    }
}

Authenticated.contextTypes = {
    user: React.PropTypes.any
};