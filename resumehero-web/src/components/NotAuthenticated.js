import React from 'react';

export default class NotAuthenticated extends React.Component {

    render() {
        var user = this.context.user;
        var authenticated = user !== undefined;

        return authenticated ? null : this.props.children;
    }
}

NotAuthenticated.contextTypes = {
    user: React.PropTypes.object
};