import React from 'react';
import Header from './Header';

export default class MasterPage extends React.Component {

    constructor() {
        super();
        this.state = {
            user: undefined
        }
    }

    getChildContext() {
        return {
            user: this.state.user,
            changeUser: this.changeUser.bind(this)
        };
    }

    changeUser(user) {
        this.setState({user: user});
    }

    render() {
        return (
            <div>
                <Header/>
                { this.props.children }
            </div>
        );
    }
}

MasterPage.childContextTypes = {
    user: React.PropTypes.any,
    changeUser: React.PropTypes.any
};