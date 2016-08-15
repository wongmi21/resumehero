import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MasterPage from './pages/MasterPage';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';

function logout(nextState, replace) {
    replace('/');
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={MasterPage}>
            <IndexRoute component={IndexPage}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/register' component={RegisterPage}/>
            <Route path='/profile' component={ProfilePage}/>
            <Route path='/search' component={SearchPage}/>
            <Route path='/logout' onEnter={logout}/>
        </Route>
    </Router>
  , document.getElementById('app-container')
);