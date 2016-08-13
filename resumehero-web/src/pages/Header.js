import React from 'react';
import { Navbar, Nav, NavItem, FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import Authenticated from '../components/Authenticated';
import NotAuthenticated from '../components/NotAuthenticated';

export default class Header extends React.Component {

    handleLogout() {
        this.context.changeUser(undefined);
    }

    render() {
        return (
            <Navbar bsStyle="default">
                <Nav>
                    <IndexLinkContainer to="/"><NavItem>Home</NavItem></IndexLinkContainer>
                    <Authenticated>
                        <LinkContainer to="/profile"><NavItem>Profile</NavItem></LinkContainer>
                    </Authenticated>
                    <Authenticated>
                        <LinkContainer to="/jobs">
                            <Navbar.Form pullLeft>
                                <FormGroup>
                                    <FormControl placeholder="Search Jobs" />
                                </FormGroup>
                                {' '}
                                <FormGroup>
                                    <FormControl placeholder="Location" />
                                </FormGroup>
                                {' '}
                                <Button>Search</Button>
                            </Navbar.Form>
                        </LinkContainer>
                    </Authenticated>
                </Nav>
                <Nav pullRight>
                    <Authenticated>
                        <IndexLinkContainer to="/logout"><NavItem onClick={this.handleLogout.bind(this)}>Logout</NavItem></IndexLinkContainer>
                    </Authenticated>
                    <NotAuthenticated>
                        <LinkContainer to="/login"><NavItem>Log In</NavItem></LinkContainer>
                    </NotAuthenticated>
                    <NotAuthenticated>
                        <LinkContainer to="/register"><NavItem>Create Account</NavItem></LinkContainer>
                    </NotAuthenticated>
                </Nav>
            </Navbar>
        );
    }
}

Header.contextTypes = {
    changeUser: React.PropTypes.func
};