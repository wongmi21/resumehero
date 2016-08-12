import React from 'react';
import Header from './Header';

export default class MasterPage extends React.Component {

    constructor() {
        super();
        this.state = {
            user: JSON.parse(localStorage.getItem('user')) || undefined
        };
        console.log(this.state);
    }

    getChildContext() {
        return {
            user: this.state.user,
            changeUser: this.changeUser.bind(this)
        };
    }

    changeUser(user) {
        this.setState({user: user});
        if (user === undefined) {
            localStorage.clear();
        } else {
            localStorage.setItem('user', JSON.stringify(user));
        }
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
    user: React.PropTypes.object,
    changeUser: React.PropTypes.func
};