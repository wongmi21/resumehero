import React from 'react';
import { Link } from 'react-router';

export default class LogoutLink extends React.Component {

    handleClick() {
        this.context.changeUser(undefined);
    }

    render() {
        return <Link to="/" onClick={this.handleClick.bind(this)}>Logout</Link>;
    }
}

LogoutLink.contextTypes = {
    changeUser: React.PropTypes.func
};