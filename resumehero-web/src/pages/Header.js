import React from 'react';
import { Link } from 'react-router';
import Authenticated from '../components/Authenticated';
import NotAuthenticated from '../components/NotAuthenticated';
import LogoutLink from '../components/LogoutLink';

export default class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <div id="navbar-collapse" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <Authenticated>
                                <li><Link to="/profile">Profile</Link></li>
                            </Authenticated>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <Authenticated>
                                <li><LogoutLink /></li>
                            </Authenticated>
                            <NotAuthenticated>
                                <li><Link to="/login">Log In</Link></li>
                            </NotAuthenticated>
                            <NotAuthenticated>
                                <li><Link to="/register">Create Account</Link></li>
                            </NotAuthenticated>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}