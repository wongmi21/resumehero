import React from 'react';
import { Grid } from 'react-bootstrap';
import SearchResults from '../components/SearchResults';

export default class JobsPage extends React.Component {

    constructor() {
        super();
        this.state = {
            jobs: {}
        }
    }

    componentWillMount() {
        if(this.context.user === undefined) {
            this.render = function () {
                return null;
            };
        }
    }

    render() {
        return (
            <Grid>
                <h3>Search Results</h3>
                <hr />
                <SearchResults />
            </Grid>
        );
    }
}

JobsPage.contextTypes = {
    user: React.PropTypes.object
};