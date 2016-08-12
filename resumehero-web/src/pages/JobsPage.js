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
            null
        );
    }
}

JobsPage.contextTypes = {
    user: React.PropTypes.object
};