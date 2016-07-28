import React from "react";
import DocumentTitle from "react-document-title";
import {RegistrationForm} from "react-stormpath";

export default class RegisterPage extends React.Component {
    render() {
        return (
            <DocumentTitle title="Create Account">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h3>Registration</h3>
                            <hr />
                        </div>
                    </div>
                    <RegistrationForm />
                </div>
            </DocumentTitle>
        );
    }
}