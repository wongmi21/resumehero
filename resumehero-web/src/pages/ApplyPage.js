import React from "react";
import DocumentTitle from "react-document-title";

export default class AppliedJobsPage extends React.Component {
    render() {
        return (
            <DocumentTitle title="Apply to Jobs">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h3>Apply to Jobs</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            Applied jobs...
                        </div>
                    </div>
                </div>
            </DocumentTitle>
        );
    }
}