import React from "react";
import DocumentTitle from "react-document-title";
import {UserProfileForm} from "react-stormpath";

export default class ProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {resume: 'No Resume Selected'};
        this.changeResume = this.changeResume.bind(this);
    }

    changeResume(e) {
        var str = e.target.value;
        var n = str.lastIndexOf('\\');
        var result = str.substring(n + 1);
        this.setState({resume: result});
    }

    render() {
        return (
            <DocumentTitle title="Update Profile">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h3>Update Profile</h3>
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
                                                        <input className="form-control" id="surname" name="surname"
                                                               style={{display: 'none'}}/>
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
                                                    <label htmlFor="resume"
                                                           className="col-xs-12 col-sm-4 control-label">Resume</label>
                                                    <div className="col-xs-12 col-sm-4">
                                                        <label className="btn btn-default btn-file">
                                                            Browse<input key="resume" id="resume" name="resume"
                                                                         type="file" style={{display: 'none'}}
                                                                         onChange={this.changeResume}/>
                                                        </label>
                                                        <span id="resume_filename"
                                                              className="control-label pull-right">{this.state.resume}</span>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="coverletter"
                                                           className="col-xs-12 col-sm-4 control-label">Cover
                                                        Letter</label>
                                                    <div className="col-xs-12 col-sm-4">
                                                        <textarea className="form-control" id="coverletter"
                                                                  name="coverletter" rows="10"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-sm-offset-4 col-sm-4">
                                                        <p className="alert alert-danger" spIf="form.error"><span
                                                            spBind="form.errorMessage"/></p>
                                                        <p className="alert alert-success" spIf="form.successful">
                                                            Profile Updated.</p>
                                                        <button type="submit" className="btn btn-primary">
                                                            Update
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