import React from "react";
import ReactDOM from "react-dom";
import {IndexRoute, Route, browserHistory} from "react-router";
import ReactStormpath, {Router, HomeRoute, LoginRoute, AuthenticatedRoute} from "react-stormpath";
//noinspection ES6UnusedImports
import { MasterPage, IndexPage, LoginPage, VerifyEmailPage, RegisterPage, ResetPasswordPage, ProfilePage } from "./pages";

ReactStormpath.init();

ReactDOM.render(
    <Router history={browserHistory}>
        <HomeRoute path="/" component={MasterPage}>
            <IndexRoute component={IndexPage}/>
            <LoginRoute path="/login" component={LoginPage}/>
            <Route path="/verify" component={VerifyEmailPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/forgot" component={ResetPasswordPage}/>
            <AuthenticatedRoute>
                <HomeRoute path="/profile" component={ProfilePage}/>
                <Route path="/find" component={FindPage}/>
                <Route path="/apply" component={ApplyPage}/>
            </AuthenticatedRoute>
        </HomeRoute>
    </Router>,
    document.getElementById('app-container')
);