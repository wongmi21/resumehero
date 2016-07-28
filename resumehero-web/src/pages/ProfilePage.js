import React from "react";
import DocumentTitle from "react-document-title";
import {UserProfileForm} from "react-stormpath";

export default class ProfilePage extends React.Component {
    render() {
        return (
            <DocumentTitle title="Update Profile">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h3>My Profile</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <UserProfileForm>
                                <div className='sp-update-profile-form'>
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <div className="form-horizontal">
                                                <div className="form-group">
                                                    <label htmlFor="givenName"
                                                           className="col-xs-12 col-sm-4 control-label">Name</label>
                                                    <div className="col-xs-12 col-sm-4">
                                                        <input className="form-control" id="givenName" name="givenName"
                                                               required="true"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email" className="col-xs-12 col-sm-4 control-label">Email</label>
                                                    <div className="col-xs-12 col-sm-4">
                                                        <input className="form-control" id="email" name="email"
                                                               required="true"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password"
                                                           className="col-xs-12 col-sm-4 control-label">New
                                                        Password</label>
                                                    <div className="col-xs-12 col-sm-4">
                                                        <input className="form-control" id="password" name="password"
                                                               type="password" placeholder="Password" required="true"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password"
                                                           className="col-xs-12 col-sm-4 control-label">Existing
                                                        Password</label>
                                                    <div className="col-xs-12 col-sm-4">
                                                        <input className="form-control" id="existingPassword"
                                                               name="existingPassword" type="password"
                                                               placeholder="Existing Password" required="true"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-sm-offset-4 col-sm-4">
                                                        <p className="alert alert-danger" spIf="form.error"><span
                                                            spBind="form.errorMessage"/></p>
                                                        <p className="alert alert-success" spIf="form.successful">
                                                            Profile Updated.</p>
                                                        <button type="submit" className="btn btn-primary">
                                                            <span spIf="!form.processing">
                                                                Update
                                                            </span>
                                                            <span spIf="form.processing">
                                                                Updating...
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </UserProfileForm>
                        </div>
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}