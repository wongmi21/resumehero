import React from 'react';

export default class JobsPage extends React.Component {

    constructor() {
        super();
    }

    componentWillMount() {
        if(this.context.user === undefined) {
            this.render = function () {
                return null;
            }
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h3>Log In</h3>
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

JobsPage.contextTypes = {
    user: React.PropTypes.object
};